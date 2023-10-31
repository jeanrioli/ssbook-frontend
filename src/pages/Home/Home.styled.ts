import styled from 'styled-components';
import {
	BOTTOM_NAVIGATION_HEIGHT,
	HEADER_HEIGHT_MOBILE,
	HEADER_HEIGHT_DESKTOP,
	FOOTER_HEIGHT,
	DESKTOP_BREAKPOINT,
	CONTENT_WIDTH,
	TAB_BAR_HEIGHT,
} from '../../utils';

export const Container = styled.div`
	margin-top: calc(${HEADER_HEIGHT_MOBILE} + ${TAB_BAR_HEIGHT});
	margin-bottom: ${BOTTOM_NAVIGATION_HEIGHT};
	background-color: ${({ theme }) => theme.color.neutral.gray.light};
	min-height: calc(100vh - ${HEADER_HEIGHT_MOBILE} - ${HEADER_HEIGHT_MOBILE});
	display: flex;
	flex-direction: column;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		min-height: calc(100vh - ${HEADER_HEIGHT_DESKTOP} - ${FOOTER_HEIGHT});
		margin: ${HEADER_HEIGHT_DESKTOP} 0 0;
		padding-top: 24px;
	}
`;

export const TabBar = styled.div`
	position: fixed;
	top: ${HEADER_HEIGHT_MOBILE};
	width: 100%;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		position: relative;
		top: 0;
		width: ${CONTENT_WIDTH};
		margin: 0 auto;
	}
`;

export const Tab = styled.div`
	padding-top: 32px;
	flex: 1;
	display: flex;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		padding-top: 24px;
	}
`;
