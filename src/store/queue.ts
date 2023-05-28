import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { toast } from 'react-toastify';
import { queueUsers } from 'apis/endpoints';
import { QueueDetails, QueueParams } from 'apis/types';

type State = {
	user: Record<string, any>;
	error: Record<string, any>;
};

type Action = {
	joinQueue: (params: QueueParams, details: QueueDetails) => void;
};

export const useQueueStore = create<State & Action>()(
	devtools(
		persist(
			(set) => ({
				user: {},
				error: {},
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
