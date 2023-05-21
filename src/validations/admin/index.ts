import * as Yup from 'yup';

export const AdminSignupValidation = Yup.object().shape({
	email: Yup.string().email('Please enter a valid email address').required('Email is required'),
	name: Yup.string().required('Name is required'),
	description: Yup.string(),
	legalName: Yup.string().required('Legal Name is required'),
	telephone: Yup.string().required('Telephone is required'),
	url: Yup.string(),
	taxId: Yup.string(),
	vatId: Yup.string(),
	adminEmail: Yup.string().email('Please enter a valid email address').required('Email is required'),
	givenName: Yup.string().required('Name is required'),
	familyName: Yup.string().required('Family Name is required'),
	displayName: Yup.string().required('Display Name is required'),
	adminPhone: Yup.string().required('Telephone is required'),
	jobTitle: Yup.string().required('Job Title is required'),
});
