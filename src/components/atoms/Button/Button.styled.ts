import styled, { css } from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.button<{ $isSelected?: boolean }>`
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;

	${({ $isSelected }) =>
		$isSelected &&
		css`
			${ButtonContained} {
				background-color: #a076f2;
				border: 1px solid #a076f2;
				color: #fff;
			}

			${Line} {
				background: #a076f2;
			}
		`}
`;

export const Label = styled.div``;

export const Icon = styled.div`
	width: 24px;
`;

export const ButtonText = styled.div`
	${Label} {
		color: #a076f2;
		text-align: center;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		font-size: 14px;

		@media (min-width: ${DESKTOP_BREAKPOINT}) {
			font-size: 16px;
		}
	}
`;

export const ButtonContained = styled.div`
	color: #fff;

	padding: 6px 16px;
	background-color: #fff;
	border-radius: 16px;
	color: #757575;
	border: 1px solid #e0e0e0;

	${Label} {
		text-align: center;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		font-size: 14px;
	}
`;

export const ButtonUnderlined = styled.div`
	width: fit-content;
	padding: 16px 10px;
	display: flex;
	flex-direction: column;
	position: relative;

	${Label} {
		color: #555;
		text-align: center;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		font-size: 14px;
	}
`;

export const ButtonIcon = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;

	${Label} {
		font-size: 18px;
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
