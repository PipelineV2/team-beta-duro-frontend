import UserInfo from 'components/user-info';
import Logo from '../assets/images/duro.png';

const UserInfoPage = () => {
	return (
		<div>
			<img src={Logo} className='h-12 p-2' alt="the official duro logo" />
			<UserInfo />
		</div>
	);
};

export default UserInfoPage; 
