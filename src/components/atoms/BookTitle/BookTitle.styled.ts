import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div`
	display: grid;
	gap: 8px 20px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		gap: 12px 0;
		${({ theme }) => theme.typography.title.large}
	}
`;

export const Title = styled.div`
	${({ theme }) => theme.typography.title.normal}

	color: ${({ theme }) => theme.color.neutral.gray.dark};
	grid-column: 1 / 3;
	grid-row: 1 / 2;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		${({ theme }) => theme.typography.title.large}
	}
`;

export const Author = styled.div`
	${({ theme }) => theme.typography.subtitle.normal}

	color: ${({ theme }) => theme.color.neutral.gray.medium};
	grid-column: 1 / 3;
	grid-row: 2 / 3;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		${({ theme }) => theme.typography.subtitle.large}
	}
`;

export const Button = styled.div`
	grid-column: 3 / 4;
	grid-row: 1 / 3;
	display: flex;
	justify-content: flex-end;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: none;
	}
`;
