import { useRef } from 'react';
import { useAdminStore } from '../../store/admin';
import { Button, QrCode } from '../common';

const Admin = () => {
	const [admin] = useAdminStore((state) => [state.admin]);
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

	return (
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
								url={`${window.location.origin}/queue?corporate_name=${admin.name}&admin_name=${admin.administrators[0].display_name}`}
							/>
						</div>
						<div className='mt-4'>
							<Button onClick={downloadQRCode}>Download QR Code</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
