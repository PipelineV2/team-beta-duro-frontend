import { FC, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/common';
import { useQueueStore } from 'store/queue';
import { useAdminStore } from 'store/admin';

const UserInfo: FC = () => {
	const [user, leaveQueue, loading, fetchUser] = useQueueStore((state) => [
		state.user,
		state.leaveQueue,
		state.loading,
		state.fetchUser,
	]);
	const [admin] = useAdminStore((state) => [state.admin]);
	const navigate = useNavigate();

	useEffect(() => {
		fetchUser({
			coperate_name: admin.legal_name,
			administrator_name: admin.administrators[0].display_name,
			telephone: user.telephone,
			status: user.status,
		});
	}, []);

	return (
		<div className='container h-screen flex justify-center items-center mx-auto py-16 px-4 sm:px-8 xl:px-16'>
			{Object.keys(user).length > 0 ? (
				<div className='shadow-md flex flex-col gap-4 w-80 p-4 rounded-md'>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base font-semibold'>Email:</p>
						<span className='text-base font-normal'>{user.email}</span>
					</div>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base font-semibold'>Time Queued:</p>
						<span className='text-base font-normal'>{`${new Date(user.time_queued).toLocaleTimeString()}`}</span>
					</div>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base font-semibold'>Phone number:</p>
						<span className='text-base font-normal'>{user.telephone}</span>
					</div>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base font-semibold'>Status</p>
						<span className='text-base capitalize font-normal'>{user.status}</span>
					</div>
					<div className='flex justify-center mt-4'>
						<Button
							onClick={() =>
								leaveQueue({
									coperate_id: admin.id,
									administrator_id: admin.administrators[0].id,
									telephone: user.telephone,
								})
							}>
							{loading ? (
								<span className='inline-flex justify-center items-center'>
									<FaSpinner className='animate-spin h-5 w-5 mr-3' />
									Leaving...
								</span>
							) : (
								<span>Leave the queue</span>
							)}
						</Button>
					</div>
				</div>
			) : (
				<div>
					<h5 className='text-3xl font-semibold text-center'>You have not joined a queue yet! </h5>
					<p className='text-center'>Ask your local administrator for the Qrcode in order to join the queue</p>

					<p className='italic mt-4 text-center font-semibold'>
						Once you join a queue, your details will appear here!!
					</p>
					<h3 className='text-3xl text-center font-semibold mt-4'>Or</h3>

					<div className='flex justify-center mt-4'>
						<Button onClick={() => navigate('/admin-signup')}>Signup as an organization</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserInfo;
