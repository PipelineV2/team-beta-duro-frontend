import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAdminStore } from '../../store/admin';
import { Button, QrCode } from '../common';
import { useQueueStore } from 'store/queue';

const Admin = () => {
	const [leaveQueue] = useQueueStore((state) => [state.leaveQueue]);
	const [admin, fetchCorporation, fetchQueuedUsers, users] = useAdminStore((state) => [
		state.admin,
		state.fetchCorporation,
		state.fetchQueuedUsers,
		state.users,
	]);
	const { id } = useParams();
	const qrRef = useRef<any>();

	const downloadQRCode = () => {
		let canvas = qrRef.current.querySelector('canvas');
		let image = canvas.toDataURL('image/png');
		let anchor = document.createElement('a');
		anchor.href = image;
		anchor.download = `qr-code.png`;
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
	};

	useEffect(() => {
		fetchCorporation(id as string);
		fetchQueuedUsers(id as string, admin.administrators[0].id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{Object.keys(admin).length ? (
				<div className='container py-16 mx-auto px-4 sm:px-8 xl:px-16'>
					<h3 className='text-3xl font-bold text-center'>Organization Details</h3>

					<div className='max-w-4xl mx-auto'>
						<div className='grid gap-8 justify-between grid-cols-1 sm:grid-cols-2 mt-16'>
							<div className='shadow-md p-6 w-full'>
								<h3 className='text-center text-2xl font-medium'>Company Details</h3>
								<div className='flex flex-col gap-4 w-full mt-8'>
									<div className='flex gap-2 justify-between font-semibold'>
										Company Name: <span className='font-light'>{admin.name}</span>
									</div>
									<div className='flex gap-2 justify-between font-semibold'>
										Email: <span className='font-light'>{admin.email}</span>
									</div>
									<div className='flex gap-2 justify-between font-semibold'>
										Description: <span className='font-light'>{admin.description}</span>
									</div>
									<div className='flex gap-2 justify-between font-semibold'>
										Telephone: <span className='font-light'>{admin.telephone}</span>
									</div>
									<div className='flex gap-2 justify-between font-semibold'>
										Website: <span className='font-light'>{admin.url}</span>
									</div>
								</div>
							</div>
							<div className='flex flex-col items-center'>
								<div ref={qrRef}>
									<QrCode
										url={`${window.location.origin}/queue?corporate_name=${admin.legal_name}&admin_name=${admin.administrators[0].display_name}`}
									/>
								</div>
								<div className='mt-4'>
									<Button onClick={downloadQRCode}>Download QR Code</Button>
								</div>
							</div>
						</div>
						<div className='w-full overflow-x-scroll mt-16'>
							<h3 className='text-2xl text-center font-semibold mb-8'>Users</h3>
							<table className='table-auto w-full overflow-x-scroll border border-purple-600 border-collapse'>
								<thead className='w-full max-w-full overflow-x-hidden'>
									<tr>
										<th className='border p-4'>Email</th>
										<th className='border p-4'>Telephone</th>
										<th className='border p-4'>Time Queued</th>
										<th className='border p-4'>Time Dequeued</th>
										<th className='border p-4'>Status</th>
										<th className='border p-4'>Action</th>
									</tr>
								</thead>
								<tbody>
									{users.map((user) => (
										<tr>
											<td className='border p-4'>{user.email}</td>
											<td className='border p-4'>{user.telephone}</td>
											<td className='border p-4'>
												{user.time_queued ? new Date(user.time_queued).toUTCString() : '---'}
											</td>
											<td className='border p-4 text-center'>
												{user.time_dequeued ? new Date(user.time_dequeued).toUTCString() : '---'}
											</td>
											<td className='border p-4'>{user.status}</td>
											<td className='border p-4'>
												{user.status === 'active' && (
													<Button
														className='px-2 text-sm'
														onClick={() => {
															leaveQueue({
																coperate_id: admin.id,
																administrator_id: admin.administrators[0].id,
																telephone: user.telephone,
															});
														}}>
														Dequeue
													</Button>
												)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			) : (
				<div className='h-screen flex items-center justify-center'>
					<h3>Not sure what you're looking for, but I'm very sure it's not here</h3>
				</div>
			)}
		</>
	);
};

export default Admin;
