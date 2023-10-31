import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 6px 16px 8px;
	border-radius: 8px;
	border: 1px solid #e0e0e0;
	gap: 8px;
	align-items: center;

	::placeholder {
		${({ theme }) => theme.typography.body.regular}
		color: ${({ theme }) => theme.color.neutral.gray.medium};
	}
`;

export const Input = styled.input`
	all: unset;
	${({ theme }) => theme.typography.body.regular}
	color: ${({ theme }) => theme.color.neutral.black};
	flex: 1;
`;

export const Icon = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.color.neutral.gray.regular};
`;
