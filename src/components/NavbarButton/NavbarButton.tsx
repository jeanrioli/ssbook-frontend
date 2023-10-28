import { FC, ButtonHTMLAttributes } from 'react';
import * as Styled from './NavbarButton.styled';

interface NavbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	icon: JSX.Element;
	isSelected: boolean;
}

export const NavbarButton: FC<NavbarButtonProps> = ({ label, icon, isSelected, onClick }) => {
	return (
		<Styled.Container onClick={onClick} isSelected={isSelected}>
			<Styled.Icon>{icon}</Styled.Icon>
			<Styled.Label>{label}</Styled.Label>
		</Styled.Container>
	);
};
