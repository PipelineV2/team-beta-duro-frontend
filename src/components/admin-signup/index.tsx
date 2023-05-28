import { Formik, Form, ErrorMessage } from 'formik';
import { AdminSignupValidation } from '../../validations/admin';
import { FaSpinner } from 'react-icons/fa';
import { Button } from '../common';
import { useAdminStore } from '../../store/admin';

const AdminSignup = () => {
	const [addCorporation] = useAdminStore((state) => [state.addCorporation]);

	const formInitialValues = {
		email: '',
		name: '',
		description: '',
		legalName: '',
		telephone: '',
		url: '',
		taxId: '',
		vatId: '',
		adminEmail: '',
		givenName: '',
		familyName: '',
		displayName: '',
		adminPhone: '',
		jobTitle: '',
	};

	return (
		<Formik
			initialValues={formInitialValues}
			validationSchema={AdminSignupValidation}
			onSubmit={(values) => {
				const corporation = {
					email: values.email,
					name: values.name,
					description: values.description,
					legal_name: values.legalName,
					telephone: values.telephone,
					url: values.url,
					tax_id: values.taxId,
					vat_id: values.vatId,
				};

				const administrator = {
					email: values.adminEmail,
					given_name: values.givenName,
					family_name: values.familyName,
					display_name: values.displayName,
					telephone: values.adminPhone,
					job_title: values.jobTitle,
				};
				addCorporation(corporation, administrator);
			}}>
			{({ setFieldValue, handleBlur, isSubmitting }) => (
				<Form>
					<div className='container mx-auto py-16 px-4 sm:px-8 xl:px-16'>
						<h3 className='text-center text-3xl mt-16 font-bold'>Corporate Signup</h3>

						<div className='max-w-4xl mx-auto mt-16'>
							<h4 className='text-2xl font-medium'>Organization Details</h4>
							<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8'>
								<div className='flex flex-col gap-1'>
									<label>Name</label>
									<input
										type='text'
										name='name'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('name', e.target.value)}
										placeholder='Greg'
										className='border-2 border-gray border-solid pl-4 rounded h-10'
									/>
									<ErrorMessage render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>} name='name' />
								</div>
								<div className='flex flex-col gap-1'>
									<label>Email</label>
									<input
										type='text'
										name='email'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('email', e.target.value)}
										placeholder='abc@example.com'
										className='border-2 border-gray border-solid pl-4 rounded h-10'
									/>
									<ErrorMessage render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>} name='email' />
								</div>
								<div className='flex flex-col gap-1'>
									<label>Description</label>
									<textarea
										rows={4}
										name='description'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('description', e.target.value)}
										placeholder='Type something here...'
										className='border-2 border-gray border-solid pl-4 rounded'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='description'
									/>
								</div>
								<div className='flex flex-col gap-1'>
									<label>Legal Name</label>
									<input
										type='text'
										name='legalName'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('legalName', e.target.value)}
										placeholder='Ajasco'
										className='border-2 border-gray border-solid pl-4 h-10 rounded mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='legalName'
									/>
								</div>
								<div className='flex flex-col gap-1'>
									<label>Telephone</label>
									<input
										type='text'
										name='telephone'
										placeholder='09129383448'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('telephone', e.target.value)}
										className='border-2 border-gray border-solid pl-4 h-10 rounded mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='telephone'
									/>
								</div>
								<div className='flex flex-col gap-1'>
									<label>Url</label>
									<input
										type='text'
										name='url'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('url', e.target.value)}
										placeholder='https://your-website.com'
										className='border-2 border-gray border-solid pl-4 h-10 rounded mb-2'
									/>
									<ErrorMessage render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>} name='url' />
								</div>
								<div className='flex flex-col gap-1'>
									<label>Tax ID</label>
									<input
										type='text'
										name='taxId'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('taxId', e.target.value)}
										placeholder='12344558688'
										className='border-2 border-gray border-solid pl-4 h-10 rounded mb-2'
									/>
									<ErrorMessage render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>} name='taxId' />
								</div>
								<div className='flex flex-col gap-1'>
									<label>Vat ID</label>
									<input
										type='text'
										name='vatId'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('vatId', e.target.value)}
										placeholder='V2993784847'
										className='border-2 border-gray border-solid pl-4 h-10 rounded mb-2'
									/>
									<ErrorMessage render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>} name='vatId' />
								</div>
							</div>

							<h4 className='text-2xl font-medium mt-8'>Admin Details</h4>
							<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8'>
								<div className='flex flex-col gap-1'>
									<label>Given Name</label>
									<input
										type='text'
										name='givenName'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('givenName', e.target.value)}
										placeholder='Greg'
										className='border-2 border-gray border-solid pl-4 rounded h-10 mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='givenName'
									/>
								</div>
								<div className='flex flex-col gap-1'>
									<label>Family Name</label>
									<input
										type='text'
										name='familyName'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('familyName', e.target.value)}
										placeholder='Neal'
										className='border-2 border-gray border-solid pl-4 rounded h-10 mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='familyName'
									/>
								</div>
								<div className='flex flex-col gap-1'>
									<label>Display Name</label>
									<input
										type='text'
										name='displayName'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('displayName', e.target.value)}
										placeholder='Ajasco'
										className='border-2 border-gray border-solid pl-4 h-10 rounded mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='displayName'
									/>
								</div>
								<div className='flex flex-col gap-1'>
									<label>Admin Email</label>
									<input
										type='text'
										name='adminEmail'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('adminEmail', e.target.value)}
										placeholder='abc@example.com'
										className='border-2 border-gray border-solid pl-4 rounded h-10 mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='adminEmail'
									/>
								</div>
								<div className='flex flex-col gap-1'>
									<label>Admin Phone Number</label>
									<input
										type='text'
										name='adminPhone'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('adminPhone', e.target.value)}
										placeholder='09123848458'
										className='border-2 border-gray border-solid pl-4 h-10 rounded mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='adminPhone'
									/>
								</div>

								<div className='flex flex-col gap-1'>
									<label>Job Title</label>
									<input
										type='text'
										name='jobTitle'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('jobTitle', e.target.value)}
										placeholder='Software Engineer'
										className='border-2 border-gray border-solid pl-4 h-10 rounded mb-2'
									/>
									<ErrorMessage render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>} name='jobTitle' />
								</div>
							</div>
						</div>

						<div className='flex justify-center mt-8'>
							<Button type='submit' disabled={isSubmitting}>
								{isSubmitting ? (
									<span className='inline-flex justify-center items-center'>
										<FaSpinner className='animate-spin h-5 w-5 mr-3' />
										Submitting...
									</span>
								) : (
									<span>Submit</span>
								)}
							</Button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default AdminSignup;
