import React from 'react';
import Admin from '../components/admin';
import Logo from '../assets/images/duro.png'

const AdminPage = () => {
	return (
		<div>
			<img src={Logo} className='h-12 p-2' alt="the official duro logo" />
			<Admin />
		</div>
	);
};

export default AdminPage;
