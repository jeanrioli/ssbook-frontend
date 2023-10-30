import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		align-items: baseline;
	}
`;

export const Title = styled.div`
	color: ${({ theme }) => theme.color.neutral.gray.dark};
	${({ theme }) => theme.typography.title.normal}

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		${({ theme }) => theme.typography.title.medium}
	}
`;

export const Button = styled.div``;
