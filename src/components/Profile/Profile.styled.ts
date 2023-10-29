import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const Photo = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	object-fit: cover;
`;

export const Username = styled.div`
	color: #555;

	font-family: Roboto;
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;
