import styled, { css } from 'styled-components';

export const Container = styled.button<{ $variant: 'vertical' | 'horizontal'; $isSelected: boolean }>`
	cursor: pointer;
	border: 0;
	background: none;
	padding: 0;
	width: 56px;
	height: 37px;

	${({ $variant }) =>
		$variant === 'horizontal' &&
		css`
			width: auto;
			height: 48px;
			display: flex;
			gap: 12px;
			align-items: center;
			color: ${({ theme }) => theme.color.neutral.gray.dark};

			${Label} {
				${({ theme }) => theme.typography.button.bold}
			}
		`}

	${({ $variant, $isSelected }) =>
		$variant === 'vertical' &&
		!$isSelected &&
		css`
			color: ${({ theme }) => theme.color.neutral.gray.regular};
		`}

	${({ $variant, $isSelected }) =>
		$variant === 'vertical' &&
		$isSelected &&
		css`
			color: ${({ theme }) => theme.color.primary};
		`}
`;

export const Icon = styled.div``;

export const Label = styled.div`
	${({ theme }) => theme.typography.button.regular}
`;
