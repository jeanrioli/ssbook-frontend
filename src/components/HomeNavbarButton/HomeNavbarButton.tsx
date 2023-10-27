import { FC, ButtonHTMLAttributes } from 'react';
import * as Styled from './HomeNavbarButton.styled';

interface HomeNavbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	isSelected: boolean;
}

export const HomeNavbarButton: FC<HomeNavbarButtonProps> = ({ label, isSelected, onClick }) => {
	return (
		<Styled.Container onClick={onClick}>
			<Styled.Label>{label}</Styled.Label>
			<Styled.Line $isSelected={isSelected} />
		</Styled.Container>
	);
};
