import styled from 'styled-components';
import { CONTENT_WIDTH, DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
`;

export const Top = styled.div`
	padding: 0 0 24px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		margin: 0 auto;
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
