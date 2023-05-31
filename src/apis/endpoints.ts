import fetchClient from '.';
import { ICorporation, IAdministrator, QueueDetails, QueueParams, DequeueParams } from './types';

export const fetchCorporateDetails = (corporateId: string) => {
	return fetchClient(`platform/requesters${corporateId}`);
};

export const addOrganization = (corporation: ICorporation, administrator: IAdministrator) => {
	return fetchClient(`platform/requesters`, {
		body: { corporation, administrator },
		method: 'POST',
	});
};

export const queueUsers = (params: QueueParams, data: QueueDetails) => {
	return fetchClient(`requester/${params.coperate_name}/${params.administrator_name}/queue`, {
		body: { ...data, location: [0] },
		method: 'POST',
	});
};

export const dequeueUser = (body: DequeueParams) => {
	return fetchClient(`requesters/${body.coperate_id}/${body.administrator_id}/dequeue/${body.telephone}`, {
		method: 'GET',
	});
};
