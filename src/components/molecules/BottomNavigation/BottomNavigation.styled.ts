import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.nav`
	width: 100%;
	background: #fff;
	box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.08);
	height: 56px;
	position: fixed;
	bottom: 0;
	z-index: 99;
	display: flex;
	align-items: center;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: none;
	}
`;

export const Navigation = styled.div`
	margin: 0 auto;
	width: max-content;
	display: flex;
	gap: 26px;
`;
