import { FC, useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { FaSpinner } from 'react-icons/fa';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { QueueSchema, InitialSchemaValues } from 'validations/queue';
import { Button } from 'components/common';
import { useQueueStore } from 'store/queue';

const Queue: FC = () => {
	const [joinQueue] = useQueueStore((state) => [state.joinQueue]);

	const queryParameters = new URLSearchParams(window.location.search);
	const [fpHash, setFpHash] = useState('');

	useEffect(() => {
		const setFp = async () => {
			const fp = await FingerprintJS.load();

			const { visitorId } = await fp.get();
			setFpHash(visitorId);
		};

		setFp();
	}, []);

	const corporate_name = queryParameters.get('corporate_name')!;
	const admin_name = queryParameters.get('admin_name')!;

	return (
		<Formik
			initialValues={InitialSchemaValues}
			validationSchema={QueueSchema}
			onSubmit={(values, actions) => {
				joinQueue({ administrator_name: admin_name, coperate_name: corporate_name }, { ...values, device_id: fpHash });

				setTimeout(() => {
					actions.setSubmitting(false);
				}, 4000);
			}}>
			{({ isSubmitting, setFieldTouched, setFieldValue, handleBlur }) => (
				<Form>
					<div className='container mx-auto py-16 px-4 sm:px-8 xl:px-16'>
						<h3 className='text-center text-3xl font-semibold'>Join Queue</h3>

						<div className='max-w-4xl mx-auto mt-16'>
							<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8'>
								<div className='flex flex-col gap-1'>
									<label className='text-sm text-gray-700'>First Name</label>
									<input
										type='text'
										name='given_name'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('given_name', e.target.value)}
										placeholder='Greg'
										className='border-2 border-gray border-solid pl-4 rounded h-10 mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='given_name'
									/>
								</div>
								<div className='flex flex-col gap-1'>
									<label className='text-sm text-gray-700'>Last Name</label>
									<input
										type='text'
										name='family_name'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('family_name', e.target.value)}
										placeholder='Neal'
										className='border-2 border-gray border-solid pl-4 rounded h-10 mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='family_name'
									/>
								</div>
								<div className='flex flex-col gap-1'>
									<label className='text-sm text-gray-700'>Display Name</label>
									<input
										type='text'
										name='display_name'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('display_name', e.target.value)}
										placeholder='SoloSmart'
										className='border-2 border-gray border-solid pl-4 rounded h-10 mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='display_name'
									/>
								</div>
								<div className='flex flex-col gap-1'>
									<label className='text-sm text-gray-700'>Email</label>
									<input
										type='text'
										name='email'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('email', e.target.value)}
										placeholder='Greg'
										className='border-2 border-gray border-solid pl-4 rounded h-10 mb-2'
									/>
									<ErrorMessage render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>} name='email' />
								</div>
								<div className='flex flex-col gap-1'>
									<label className='text-sm text-gray-700'>Telephone</label>
									<input
										type='text'
										name='telephone'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('telephone', e.target.value)}
										placeholder='09123949443'
										className='border-2 border-gray border-solid pl-4 rounded h-10 mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='telephone'
									/>
								</div>
								<div className='flex flex-col gap-1'>
									<label className='text-sm text-gray-700'>Job Title</label>
									<input
										type='text'
										name='job_title'
										onBlur={handleBlur}
										onChange={(e) => setFieldValue('job_title', e.target.value)}
										placeholder='Farmer'
										className='border-2 border-gray border-solid pl-4 rounded h-10 mb-2'
									/>
									<ErrorMessage
										render={(msg) => <span className='text-red-500 text-sm'>{msg}</span>}
										name='job_title'
									/>
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

export default Queue;
