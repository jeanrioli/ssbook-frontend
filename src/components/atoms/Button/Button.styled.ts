import styled, { css } from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.button<{ $isSelected?: boolean }>`
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
	height: fit-content;

	${({ $isSelected }) =>
		$isSelected &&
		css`
			${ButtonContained} {
				background-color: ${({ theme }) => theme.color.primary};
				border: 1px solid ${({ theme }) => theme.color.primary};
				color: ${({ theme }) => theme.color.neutral.white};
			}

			${Line} {
				background: ${({ theme }) => theme.color.primary};
			}
		`}
`;

export const Label = styled.div``;

export const Icon = styled.div`
	width: 24px;
	color: ${({ theme }) => theme.color.neutral.gray.dark};
`;

export const ButtonText = styled.div`
	${Label} {
		${({ theme }) => theme.typography.button.bold};
		color: ${({ theme }) => theme.color.primary};

		@media (min-width: ${DESKTOP_BREAKPOINT}) {
			${({ theme }) => theme.typography.button.heavy};
		}
	}
`;

export const ButtonContained = styled.div`
	color: ${({ theme }) => theme.color.neutral.white};

	padding: 6px 16px;
	background-color: ${({ theme }) => theme.color.neutral.white};
	border-radius: 16px;
	color: ${({ theme }) => theme.color.neutral.gray.medium};
	border: 1px solid #e0e0e0;

	${Label} {
		${({ theme }) => theme.typography.button.medium};
	}
`;

export const ButtonUnderlined = styled.div`
	width: fit-content;
	padding: 16px 10px;
	display: flex;
	flex-direction: column;
	position: relative;

	${Label} {
		${({ theme }) => theme.typography.button.bold};
		color: ${({ theme }) => theme.color.neutral.gray.dark};
	}
`;

export const ButtonIcon = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;

	${Label} {
		${({ theme }) => theme.typography.button.black};
		color: ${({ theme }) => theme.color.neutral.gray.dark};
	}
`;

export const Line = styled.hr`
	height: 4px;
	background-color: black;
	width: 100%;
	margin: 0;
	border: none;
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius: 2px 2px 0px 0px;
	background: transparent;
`;
