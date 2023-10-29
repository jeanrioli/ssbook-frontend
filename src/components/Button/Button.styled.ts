import styled, { css } from 'styled-components';

export const Container = styled.button<{ isSelected?: boolean }>`
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;

	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;

	${({ isSelected }) =>
		isSelected &&
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

export const ButtonText = styled.div`
	color: #a076f2;
`;

export const ButtonContained = styled.div`
	color: #fff;

	padding: 6px 16px;
	background-color: #fff;
	border-radius: 16px;
	color: #757575;
	border: 1px solid #e0e0e0;
`;

export const ButtonUnderlined = styled.div`
	width: fit-content;
	padding: 16px 10px;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const Label = styled.div`
	color: #555;

	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
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
