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
	min-height: calc(100vh - ${HEADER_HEIGHT_MOBILE} - ${BOTTOM_NAVIGATION_HEIGHT});
	display: flex;
	flex-direction: column;
	background-image: url('https://m.media-amazon.com/images/I/A1UjcPz4gZL._SL1500_.jpg');
	background-size: 100% auto;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		margin: ${HEADER_HEIGHT_DESKTOP} 0 0;
		min-height: calc(100vh - ${HEADER_HEIGHT_DESKTOP} - ${FOOTER_HEIGHT});
		background: none;
	}
`;

export const TopSection = styled.div`
	/* position: absolute; */
	/* width: 100%; */
	/* padding-bottom: 32px; */
	/* height: 200px; */
	background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
	/* padding: 20px; */

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		background: none;
		width: ${CONTENT_WIDTH};
		margin: 0 auto;
		padding-top: 24px;
	}
`;

export const Return = styled.div`
	margin: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: none;
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
	margin-top: 30vh;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		margin-top: 0;
		width: calc(${CONTENT_WIDTH} + ((100% - ${CONTENT_WIDTH}) / 2) - 32px);
		margin-left: calc(((100% - ${CONTENT_WIDTH}) / 2) - 32px);
		box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.1);
		padding: 32px;
	}
`;

export const Content = styled.div`
	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		width: calc(${CONTENT_WIDTH} - 32px - 296px);
		padding-left: calc(32px + 296px);
	}
`;

export const Cover = styled.div``;
