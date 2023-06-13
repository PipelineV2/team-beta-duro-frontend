import React from 'react';
import Queue from 'components/queue';
import Logo from '../assets/images/duro.png';

const Signup = () => {
	return (
		<div>
			<img src={Logo} className='h-12 p-2' alt="the official duro logo" />
			<Queue />
		</div>
	);
};

export default Signup;
