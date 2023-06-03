export interface CustomConfig {
	body?: Record<string, any>;
	[key: string]: any;
}

export interface ICorporation {
	email: string;
	name: string;
	description: string;
	legal_name: string;
	telephone: string;
	url: string;
	tax_id: string;
	vat_id: string;
}

export interface IAdministrator {
	email: string;
	given_name: string;
	family_name: string;
	display_name: string;
	telephone: string;
	job_title: string;
}

export interface QueueParams {
	coperate_name: string;
	administrator_name: string;
}
export interface QueueDetails {
	email: string;
	given_name: string;
	family_name: string;
	display_name: string;
	telephone: string;
	job_title: string;
	device_id: string;
	location?: '0';
}

export interface DequeueParams {
	coperate_id: string;
	administrator_id: string;
	telephone: string;
}

export interface IFetchUsers {
	corporate_id: string;
}
