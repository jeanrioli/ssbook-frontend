import styled from 'styled-components';
import {
	BOTTOM_NAVIGATION_HEIGHT,
	HEADER_HEIGHT_MOBILE,
	HEADER_HEIGHT_DESKTOP,
	FOOTER_HEIGHT,
	DESKTOP_BREAKPOINT,
	CONTENT_WIDTH,
} from '../../utils';

export const Container = styled.div`
	margin-top: ${HEADER_HEIGHT_MOBILE}px;
	margin-bottom: ${BOTTOM_NAVIGATION_HEIGHT};
	background-color: #f7f7f7;
	min-height: calc(100vh - ${HEADER_HEIGHT_MOBILE} - ${HEADER_HEIGHT_DESKTOP});
	display: flex;
	flex-direction: column;
	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		min-height: calc(100vh - ${HEADER_HEIGHT_DESKTOP} - ${FOOTER_HEIGHT});
		margin: ${HEADER_HEIGHT_DESKTOP} 0 0;
	}
`;

export const TopSection = styled.div`
	padding-bottom: 32px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		width: ${CONTENT_WIDTH};
		margin: 0 auto;
		padding-top: 24px;
	}
`;

export const BottomSection = styled.div`
	flex: 1;
	display: flex;
	background-color: #fff;
	border-radius: 32px 0 0;
	padding: 32px 0;
	flex-direction: column;
	box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.05);

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		width: calc(${CONTENT_WIDTH} + ((100% - ${CONTENT_WIDTH}) / 2) - 32px);
		margin-left: calc(((100% - ${CONTENT_WIDTH}) / 2) - 32px);
		box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.1);
		padding: 32px;
	}
`;

export const Content = styled.div`
	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		width: ${CONTENT_WIDTH};
	}
`;
