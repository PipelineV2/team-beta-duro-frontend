export interface CustomConfig {
	body?: Record<string, any>;
	[key: string]: any;
}

export interface ICorporation {
	email: string;
	name: string;
	description: string;
	legalName: string;
	telephone: string;
	url: string;
	taxId: string;
	vatId: string;
}

export interface IAdministrator {
	email: string;
	givenName: string;
	familyName: string;
	displayName: string;
	telephone: string;
	jobTitle: string;
}
