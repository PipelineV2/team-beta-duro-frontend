import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Pages from './pages';

function App() {
	return (
		<div className='App'>
			<Pages />
			<ToastContainer position='top-right' autoClose={5000} theme='light' />
		</div>
	);
}

export default App;
