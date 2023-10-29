import styled, { css } from 'styled-components';

export const Container = styled.button<{ variant: 'vertical' | 'horizontal'; isSelected: boolean }>`
	cursor: pointer;
	border: 0;
	background: none;
	padding: 0;
	width: 56px;
	height: 37px;

	${({ variant }) =>
		variant === 'horizontal' &&
		css`
			width: auto;
			height: 48px;
			display: flex;
			gap: 12px;
			align-items: center;
			color: #555;

			${Label} {
				font-family: Roboto;
				font-size: 14px;
				font-style: normal;
				font-weight: 700;
				line-height: normal;
			}
		`}

	${({ variant, isSelected }) =>
		variant === 'vertical' &&
		!isSelected &&
		css`
			color: #9e9e9e;
		`}

	${({ variant, isSelected }) =>
		variant === 'vertical' &&
		isSelected &&
		css`
			color: #a076f2;
		`}
`;

export const Icon = styled.div``;

export const Label = styled.div`
	text-align: center;
	font-size: 10px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;
