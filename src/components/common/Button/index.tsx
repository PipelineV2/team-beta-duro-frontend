import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
}

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className='bg-purple-800 text-white rounded py-2 px-16' {...rest}>
			{children}
		</button>
	);
};

export default Button;
