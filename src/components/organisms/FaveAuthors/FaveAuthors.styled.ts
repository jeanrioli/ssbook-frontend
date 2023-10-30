import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div``;

export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px 20px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		padding: 0 0 24px;
	}
`;

export const Title = styled.div`
	${({ theme }) => theme.typography.title.normal}
	color: ${({ theme }) => theme.color.neutral.gray.dark};
`;
