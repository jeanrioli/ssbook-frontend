import styled from 'styled-components';
import {
	BOTTOM_NAVIGATION_HEIGHT,
	HEADER_HEIGHT_MOBILE,
	HEADER_HEIGHT_DESKTOP,
	FOOTER_HEIGHT,
	DESKTOP_BREAKPOINT,
	CONTENT_WIDTH,
} from '../../utils';

export const Container = styled.div<{ url: string }>`
	margin-top: 0;
	margin-bottom: ${BOTTOM_NAVIGATION_HEIGHT};
	background-color: ${({ theme }) => theme.color.neutral.gray.light};
	min-height: calc(100vh - ${HEADER_HEIGHT_MOBILE} - ${BOTTOM_NAVIGATION_HEIGHT});
	display: flex;
	flex-direction: column;
	background-image: url(${({ url }) => url});
	background-size: 100% auto;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		margin: ${HEADER_HEIGHT_DESKTOP} 0 0;
		min-height: calc(100vh - ${HEADER_HEIGHT_DESKTOP} - ${FOOTER_HEIGHT});
		background: none;
		padding: 24px 0 0;
	}
`;

export const DesktopView = styled.div`
	display: none;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: block;
	}
`;

export const MobileView = styled.div`
	display: inline-block;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: none;
	}
`;

export const Top = styled.div`
	height: 30vh;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		padding-left: calc(24px + 296px + ((100% - ${CONTENT_WIDTH}) / 2));
		padding-bottom: 24px;
		width: calc(${CONTENT_WIDTH} - 32px - 296px);
		display: block;
		height: auto;
	}
`;

export const Overflow = styled.div`
	background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
	height: 100%;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: none;
	}
`;

export const Return = styled.div`
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: none;
	}
`;

export const Content = styled.div`
	padding: 0 20px;

	> div:nth-child(1) {
		margin-bottom: 20px;
	}

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		width: calc(${CONTENT_WIDTH} - 24px - 296px);
		padding-left: calc(24px + 296px);
	}
`;

export const Cover = styled.div``;

export const SectionContainer = styled.div`
	flex: 1;
	display: flex;
`;

export const About = styled.div`
	display: none;
	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: flex;
		flex-direction: column;
		margin-top: 40px;

		h2:nth-child(1) {
			margin-bottom: 24px;
		}
	}
`;
