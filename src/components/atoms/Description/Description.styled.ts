import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div`
	${({ theme }) => theme.typography.body.medium};
	color: ${({ theme }) => theme.color.neutral.gray.dark};

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		${({ theme }) => theme.typography.body.large};
	}
`;
