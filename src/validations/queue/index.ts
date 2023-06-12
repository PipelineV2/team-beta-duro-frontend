import * as Yup from 'yup';

export const QueueSchema = Yup.object().shape({
	email: Yup.string().email('Please enter a valid email address').required('Email is required'),
	given_name: Yup.string().required('First Name is required'),
	family_name: Yup.string().required('Last Name is required'),
	display_name: Yup.string().required('Display Name is required'),
	telephone: Yup.string().required('Telephone is required'),
	job_title: Yup.string(),
});

export const InitialSchemaValues = {
	email: '',
	given_name: '',
	family_name: '',
	display_name: '',
	telephone: '',
	job_title: '',
};
