import React from 'react';
import AdminSignup from '../components/admin-signup';
import Logo from '../assets/images/duro.png';

const AdminSignupPage = () => {
	return (
		<div>
			<img src={Logo} className='h-12 p-2' alt="the official duro logo" />
			<AdminSignup />
		</div>
	);
};
 
export default AdminSignupPage;
