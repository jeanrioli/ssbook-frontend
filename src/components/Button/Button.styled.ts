import styled, { css } from 'styled-components';

export const Container = styled.button<{ variant: 'main' | 'pill'; isSelected: boolean }>`
	background: none;
	border: none;
	padding: 0;
	color: #fff;

	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;

	${({ variant }) =>
		variant === 'main' &&
		css`
			color: red;
		`}

	${({ variant, isSelected }) =>
		variant === 'pill' &&
		!isSelected &&
		css`
			padding: 6px 16px;
			background-color: #fff;
			border-radius: 16px;
			color: #757575;
			border: 1px solid #e0e0e0;
		`}

        ${({ variant, isSelected }) =>
		variant === 'pill' &&
		isSelected &&
		css`
			padding: 6px 16px;
			background-color: #a076f2;
			border: 1px solid #a076f2;
			border-radius: 16px;
		`}
`;
