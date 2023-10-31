import { FC, ButtonHTMLAttributes } from 'react';
import * as Styled from './Button.styled';
import { IconFave } from '../../../icons';

type ButtonProps = ButtonText | ButtonContained | ButtonUnderlined | ButtonIcon;

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

interface ButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'icon';
	icon: JSX.Element;
	text?: string;
}

export const Button: FC<ButtonProps> = (props) => {
	if (props.variant === 'text') {
		return (
			<Styled.Container onClick={props.onClick}>
				<Styled.ButtonText>
					<Styled.Label>{props.text}</Styled.Label>
				</Styled.ButtonText>
			</Styled.Container>
		);
	}

	if (props.variant === 'contained') {
		return (
			<Styled.Container $isSelected={props.isSelected} onClick={props.onClick}>
				<Styled.ButtonContained>
					<Styled.Label>{props.text}</Styled.Label>
				</Styled.ButtonContained>
			</Styled.Container>
		);
	}

	if (props.variant === 'underlined') {
		return (
			<Styled.Container $isSelected={props.isSelected} onClick={props.onClick}>
				<Styled.ButtonUnderlined>
					<Styled.Label>{props.text}</Styled.Label>
					<Styled.Line />
				</Styled.ButtonUnderlined>
			</Styled.Container>
		);
	}

	if (props.variant === 'icon') {
		return (
			<Styled.Container onClick={props.onClick}>
				<Styled.ButtonIcon>
					<Styled.Icon>{props.icon}</Styled.Icon>
					{props.text ? <Styled.Label>{props.text}</Styled.Label> : null}
				</Styled.ButtonIcon>
			</Styled.Container>
		);
	}

	return null;
};
