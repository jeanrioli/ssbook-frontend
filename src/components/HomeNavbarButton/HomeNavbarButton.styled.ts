import styled from 'styled-components';

export const Container = styled.button`
	background: none;
	border: none;
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

export const Line = styled.hr<{ $isSelected: boolean }>`
	height: 4px;
	background-color: black;
	width: 100%;
	margin: 0;
	border: none;
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius: 2px 2px 0px 0px;
	background: ${({ $isSelected }) => ($isSelected ? '#a076f2' : '#fff')};
`;
