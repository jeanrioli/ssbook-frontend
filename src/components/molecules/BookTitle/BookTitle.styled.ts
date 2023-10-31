import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 20px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		${({ theme }) => theme.typography.title.large};
	}
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		gap: 12px;
	}
`;

export const Title = styled.div`
	${({ theme }) => theme.typography.title.normal};
	color: ${({ theme }) => theme.color.neutral.gray.dark};

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		${({ theme }) => theme.typography.title.large};
	}
`;

export const Author = styled.div`
	${({ theme }) => theme.typography.subtitle.normal};

	color: ${({ theme }) => theme.color.neutral.gray.medium};

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		${({ theme }) => theme.typography.subtitle.large};
	}
`;

export const Button = styled.div`
	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: none;
	}
`;
