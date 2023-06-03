import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserInfoPage from './user-info';
import Queue from './queue';
import AdminPage from './admin';
import AdminSignup from './admin-signup';

const Pages = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<UserInfoPage />} />
				<Route path='/queue' element={<Queue />} />
				<Route path='/admin/:id' element={<AdminPage />} />
				<Route path='/admin-signup' element={<AdminSignup />} />
			</Routes>
		</Router>
	);
};

export default Pages;
