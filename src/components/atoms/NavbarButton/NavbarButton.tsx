import { FC, ButtonHTMLAttributes } from 'react';
import * as Styled from './NavbarButton.styled';

interface NavbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'horizontal' | 'vertical';
	label: string;
	icon: JSX.Element;
	isSelected?: boolean;
}

export const NavbarButton: FC<NavbarButtonProps> = ({ variant, label, icon, isSelected = false, onClick }) => {
	return (
		<Styled.Container $variant={variant} onClick={onClick} $isSelected={isSelected}>
			<Styled.Icon>{icon}</Styled.Icon>
			<Styled.Label>{label}</Styled.Label>
		</Styled.Container>
	);
};
