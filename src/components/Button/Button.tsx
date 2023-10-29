import { FC, ButtonHTMLAttributes } from 'react';
import * as Styled from './Button.styled';

type ButtonProps = ButtonText | ButtonContained | ButtonUnderlined;

interface ButtonText extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'text';
	text: string;
}
interface ButtonContained extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'contained';
	text: string;
	isSelected: boolean;
}

interface ButtonUnderlined extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'underlined';
	text: string;
	isSelected: boolean;
}

export const Button: FC<ButtonProps> = (variant) => {
	if (variant.variant === 'text') {
		return (
			<Styled.Container onClick={variant.onClick}>
				<Styled.ButtonText>{variant.text}</Styled.ButtonText>
			</Styled.Container>
		);
	}

	if (variant.variant === 'contained') {
		return (
			<Styled.Container isSelected={variant.isSelected} onClick={variant.onClick}>
				<Styled.ButtonContained>{variant.text}</Styled.ButtonContained>
			</Styled.Container>
		);
	}

	if (variant.variant === 'underlined') {
		return (
			<Styled.Container isSelected={variant.isSelected} onClick={variant.onClick}>
				<Styled.ButtonUnderlined>
					<Styled.Label>{variant.text}</Styled.Label>
					<Styled.Line />
				</Styled.ButtonUnderlined>
			</Styled.Container>
		);
	}

	return null;
};
