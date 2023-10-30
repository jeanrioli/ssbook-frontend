import styled from 'styled-components';
import { CONTENT_WIDTH, DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div`
	display: none;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #a076f2;
		height: 80px;
	}
`;
export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	width: ${CONTENT_WIDTH};
`;

export const Logo = styled.img``;

export const Copyright = styled.div`
	color: #fff;
	text-align: right;
`;
