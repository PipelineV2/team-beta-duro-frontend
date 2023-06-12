import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { toast } from 'react-toastify';
import { ICorporation, IAdministrator } from '../apis/types';
import { addOrganization, getOrganization, getQueuedUsers } from '../apis/endpoints';

type State = {
	error: Record<string, any>;
	admin: Record<string, any>;
	users: Record<string, any>[];
};

type Action = {
	addCorporation: (
		corporation: ICorporation,
		administrator: IAdministrator,
		setSubmitting: (a: boolean) => void
	) => void;
	fetchCorporation: (corporate_id: string) => void;
	fetchQueuedUsers: (a: string, b: string) => void;
};

export const useAdminStore = create<State & Action>()(
	devtools(
		persist(
			(set) => ({
				admin: {},
				users: [],
				error: {},
				addCorporation: async (corporation: ICorporation, administrator: IAdministrator, setSubmitting) => {
					const { response, error } = await addOrganization(corporation, administrator);

					if (response) {
						set(() => ({ admin: response, error: {} }));
						toast.success('Account created successfully', {
							position: toast.POSITION.TOP_RIGHT,
						});
						window.location.assign(`/admin/${response.id}`);
					}

					if (error || !response) {
						set(() => ({ error }));
						toast.error(error.message, {
							position: toast.POSITION.TOP_RIGHT,
						});
						setSubmitting(false);
					}
				},
				fetchCorporation: async (corporate_id: string) => {
					const { response, error } = await getOrganization(corporate_id);
					if (response) {
						set(() => ({ admin: response, error: {} }));
					}

					if (error || !response) {
						set(() => ({ error }));
						toast.error(error.message, {
							position: toast.POSITION.TOP_RIGHT,
						});
					}
				},
				fetchQueuedUsers: async (corporate_id: string, administrator_id: string) => {
					const { response, error } = await getQueuedUsers(corporate_id, administrator_id);
					if (response) {
						set(() => ({ users: response, error: {} }));
					}

					if (error || !response) {
						set(() => ({ error }));
						toast.error('Trouble fetching users', {
							position: toast.POSITION.TOP_RIGHT,
						});
					}
				},
			}),
			{ name: 'admin' }
		)
	)
);
