import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	border-radius: 8px;
	border: 1px solid #e0e0e0;

	background: ${({ theme }) => theme.color.neutral.white};
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
	color: ${({ theme }) => theme.color.neutral.gray.dark};
	${({ theme }) => theme.typography.button.heavy};
`;

export const BooksCount = styled.div`
	color: ${({ theme }) => theme.color.neutral.gray.medium};
	${({ theme }) => theme.typography.body.regular}
`;
