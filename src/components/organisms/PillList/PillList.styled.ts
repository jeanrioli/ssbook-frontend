import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const Content = styled.div`
	width: 100%;

	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const List = styled.div`
	display: flex;
	height: 100%;
	overflow-x: scroll;
	gap: 8px;
	padding: 0 20px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		padding: 0;
	}
`;

export const Item = styled.div`
	flex-shrink: 0;
`;
