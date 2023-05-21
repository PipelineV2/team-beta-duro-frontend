import { useAdminStore } from '../../store/admin';

const Admin = () => {
	const [admin] = useAdminStore((state) => [state.admin]);

	return (
		<div className='container mx-auto px-4 sm:px-8 xl:px-16'>
			<h3>Admin Details</h3>

			<div className=''></div>
		</div>
	);
};

export default Admin;
