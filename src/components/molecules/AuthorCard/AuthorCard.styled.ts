import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	border-radius: 8px;
	border: 1px solid #e0e0e0;

	background: #fff;
	cursor: pointer;
`;

export const Photo = styled.img`
	width: 63px;
	height: 71px;
	border-radius: 8px;
	object-fit: cover;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 15px 30px 15px 20px;
`;

export const Name = styled.div`
	color: #555;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 18px;
`;

export const Works = styled.div`
	color: #757575;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
