import fetchClient from '.';
import { ICorporation, IAdministrator } from './types';

export const fetchCorporateDetails = (corporateId: string) => {
	return fetchClient(`platform/requesters${corporateId}`);
};

export const addOrganization = (corporation: ICorporation, administrator: IAdministrator) => {
	return fetchClient(`platform/requesters`, {
		body: { corporation, administrator },
		method: 'POST',
	});
};
