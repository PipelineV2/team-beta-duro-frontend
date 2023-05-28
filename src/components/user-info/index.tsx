import { Button } from 'components/common';
import { FC } from 'react';
import { useQueueStore } from 'store/queue';

const UserInfo: FC = () => {
	const [user] = useQueueStore((state) => [state.user]);

	return (
		<div className='container h-screen flex justify-center items-center mx-auto py-16 px-4 sm:px-8 xl:px-16'>
			{Object.keys(user).length > 0 ? (
				<div className='shadow-md flex flex-col gap-4 w-80 p-4 rounded-md'>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base font-semibold'>First Name:</p>
						<span className='text-base font-normal'>Greg</span>
					</div>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base font-semibold'>Last Name:</p>
						<span className='text-base font-normal'>Neal</span>
					</div>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base font-semibold'>Email:</p>
						<span className='text-base font-normal'>greg.neal@duro.com</span>
					</div>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base font-semibold'>Time Queued:</p>
						<span className='text-base font-normal'>12:56pm</span>
					</div>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base font-semibold'>Phone number:</p>
						<span className='text-base font-normal'>09228823829</span>
					</div>
					<div className='flex justify-between items-center w-full'>
						<p className='text-base font-semibold'>Job Title:</p>
						<span className='text-base font-normal'>Software Engineer</span>
					</div>
					<div className='flex justify-center'>
						<Button>Leave the queue</Button>
					</div>
				</div>
			) : (
				<div>
					<h5 className='text-3xl font-semibold text-center'>You have not joined a queue yet! </h5>
					<p className='text-center'>Ask your local administrator for the Qrcode in order to join the queue</p>

					<p className='italic mt-4 text-center font-semibold'>
						Once you join a queue, your details will appear here!!
					</p>
				</div>
			)}
		</div>
	);
};

export default UserInfo;
