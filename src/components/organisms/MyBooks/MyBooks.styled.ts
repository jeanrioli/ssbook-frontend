import styled from 'styled-components';
import { CONTENT_WIDTH, DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const Top = styled.div`
	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		margin: 0 auto;
		padding: 0 0 24px;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		width: ${CONTENT_WIDTH};
		gap: 40px;
	}
`;
