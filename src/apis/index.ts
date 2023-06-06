import { CustomConfig } from './types';

const BASE_URL = 'https://duro.herokuapp.com/api';

const fetchClient = async (endpoint: string, { body, ...customConfig }: CustomConfig = {}) => {
	const headers = { 'Content-Type': 'application/json' };
	const config: Record<string, unknown> = {
		...customConfig,
		headers: {
			...headers,
			...customConfig.headers,
		},
	};
	if (body) {
		config.body = JSON.stringify(body);
	}

	const result = await fetch(`${BASE_URL}/${endpoint}`, config);

	if (result.ok) {
		const response = await result.json();
		return response;
	} else {
		const errorMessage = await result.text();
		Promise.reject(new Error(errorMessage));
		return JSON.parse(errorMessage);
	}
};

export default fetchClient;
