import { FC, ButtonHTMLAttributes } from 'react';
import * as Styled from './ButtonNavbar.styled';

interface ButtonNavbarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'horizontal' | 'vertical';
	label: string;
	icon: JSX.Element;
	isSelected?: boolean;
}

export const ButtonNavbar: FC<ButtonNavbarProps> = ({ variant, label, icon, isSelected = false, onClick }) => {
	return (
		<Styled.Container $variant={variant} onClick={onClick} $isSelected={isSelected}>
			<Styled.Icon>{icon}</Styled.Icon>
			<Styled.Label>{label}</Styled.Label>
		</Styled.Container>
	);
};
