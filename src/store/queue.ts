import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { toast } from 'react-toastify';
import { dequeueUser, getUserDetails, queueUsers } from 'apis/endpoints';
import { DequeueParams, IUserDetails, QueueDetails, QueueParams } from 'apis/types';

type State = {
	user: Record<string, any>;
	error: Record<string, any>;
	organization: Record<string, any>;
	loading: boolean;
};

type Action = {
	joinQueue: (params: QueueParams, details: QueueDetails) => void;
	leaveQueue: (params: DequeueParams) => void;
	fetchUser: (params: IUserDetails) => void;
};

export const useQueueStore = create<State & Action>()(
	devtools(
		persist(
			(set) => ({
				user: {},
				organization: {},
				error: {},
				loading: false,
				fetchUser: async (params: IUserDetails) => {
					const { response, error } = await getUserDetails(params);
					if (response) {
						set(() => ({ user: response, error: {}, loading: false }));
					}

					if (error) {
						toast.error(error.message, {
							position: toast.POSITION.TOP_RIGHT,
						});
					}
				},
				leaveQueue: async (params) => {
					set(() => ({ loading: true }));
					const { response, error } = await dequeueUser(params);

					if (response) {
						set(() => ({ error: {}, loading: false }));
					}

					if (error) {
						toast.error(error.message, {
							position: toast.POSITION.TOP_RIGHT,
						});
					}
				},
				joinQueue: async (params: QueueParams, details: QueueDetails) => {
					const { response, error } = await queueUsers(params, details);

					if (response) {
						set(() => ({
							user: response,
							organization: { corporate_name: params.coperate_name, admin_name: params.administrator_name },
							error: {},
						}));
						toast.success('You have successfully joined the queue.', {
							position: toast.POSITION.TOP_RIGHT,
						});
						setTimeout(() => {
							window.location.assign('/');
						}, 3000);
					}

					if (error) {
						set(() => ({ error }));
						toast.error(error.message, {
							position: toast.POSITION.TOP_RIGHT,
						});
					}
				},
			}),
			{ name: 'user' }
		)
	)
);
