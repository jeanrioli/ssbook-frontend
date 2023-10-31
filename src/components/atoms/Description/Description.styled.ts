import styled from 'styled-components';

export const Container = styled.div`
	${({ theme }) => theme.typography.body.medium}
	color: ${({ theme }) => theme.color.neutral.gray.dark}
`;
