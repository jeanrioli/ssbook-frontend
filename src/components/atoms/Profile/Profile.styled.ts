import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
`;

export const Photo = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	object-fit: cover;
`;

export const Username = styled.div`
	${({ theme }) => theme.typography.button.bold}
	color: ${({ theme }) => theme.color.neutral.gray.dark}
`;
