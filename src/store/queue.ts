import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { toast } from 'react-toastify';
import { dequeueUser, queueUsers } from 'apis/endpoints';
import { DequeueParams, QueueDetails, QueueParams } from 'apis/types';

type State = {
	user: Record<string, any>;
	error: Record<string, any>;
};

type Action = {
	joinQueue: (params: QueueParams, details: QueueDetails) => void;
	leaveQueue: (params: DequeueParams) => void;
};

export const useQueueStore = create<State & Action>()(
	devtools(
		persist(
			(set) => ({
				user: {},
				error: {},
				leaveQueue: async (params) => {
					const { response, error } = await dequeueUser(params);

					if (response) {
						set(() => ({ user: {}, error: {} }));
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
						set(() => ({ user: response, error: {} }));
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
