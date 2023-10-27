import { FC, ButtonHTMLAttributes } from 'react';
import * as Styled from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'main' | 'pill';
	text: string;
	isSelected: boolean;
}

export const Button: FC<ButtonProps> = ({ variant, text, isSelected, onClick }) => {
	return (
		<Styled.Container variant={variant} isSelected={isSelected} onClick={onClick}>
			{text}
		</Styled.Container>
	);
};
