import styled from 'styled-components';

export const Container = styled.button<{ isSelected: boolean }>`
	border: 0;
	background: none;
	padding: 0;
	width: 56px;
	height: 37px;
	color: ${({ isSelected }) => (isSelected ? '#A076F2' : '#9e9e9e')};
`;

export const Icon = styled.div``;

export const Label = styled.div`
	text-align: center;
	font-size: 10px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;
