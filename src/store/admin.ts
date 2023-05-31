import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { toast } from 'react-toastify';
import { ICorporation, IAdministrator } from '../apis/types';
import { addOrganization } from '../apis/endpoints';

type State = {
	error: Record<string, any>;
	admin: Record<string, any>;
};

type Action = {
	addCorporation: (
		corporation: ICorporation,
		administrator: IAdministrator,
		setSubmitting: (a: boolean) => void
	) => void;
};

export const useAdminStore = create<State & Action>()(
	devtools(
		persist(
			(set) => ({
				admin: {},
				error: {},
				addCorporation: async (corporation: ICorporation, administrator: IAdministrator, setSubmitting) => {
					const { response, error } = await addOrganization(corporation, administrator);

					if (response) {
						set(() => ({ admin: response, error: {} }));
						toast.success('Account created successfully', {
							position: toast.POSITION.TOP_RIGHT,
						});
						window.location.assign('/admin');
					}

					if (error || !response) {
						set(() => ({ error }));
						toast.error(error.message, {
							position: toast.POSITION.TOP_RIGHT,
						});
						setSubmitting(false);
					}
				},
			}),
			{ name: 'admin' }
		)
	)
);
