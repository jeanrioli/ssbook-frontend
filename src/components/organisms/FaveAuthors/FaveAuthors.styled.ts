import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.section``;

export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px 20px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		padding: 0 0 24px;
	}
`;
