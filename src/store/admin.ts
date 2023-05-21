import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ICorporation, IAdministrator } from '../apis/types';
import { addOrganization } from '../apis/endpoints';

type State = {
	admin: Record<string, any>;
};

type Action = {
	addCorporation: (corporation: ICorporation, administrator: IAdministrator) => void;
};

export const useAdminStore = create<State & Action>()(
	devtools(
		persist(
			(set) => ({
				admin: {},
				addCorporation: async (corporation: ICorporation, administrator: IAdministrator) => {
					const admin = await addOrganization(corporation, administrator);
					console.log(admin, 'Admin');
					set(() => ({ admin }));
				},
			}),
			{ name: 'admin' }
		)
	)
);
