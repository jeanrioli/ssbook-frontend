import styled from 'styled-components';
import { bottomNavbarHeight, headerHeightDesktop, headerHeightMobile, footerHeight } from '../../utils/constants';

export const Container = styled.div`
	margin-top: ${headerHeightMobile}px;
	margin-bottom: ${bottomNavbarHeight}px;
	background-color: #f7f7f7;
	min-height: calc(100vh - ${headerHeightMobile}px - ${bottomNavbarHeight}px);
	display: flex;
	flex-direction: column;
	background-image: url('https://m.media-amazon.com/images/I/A1UjcPz4gZL._SL1500_.jpg');
	background-size: 100% auto;

	@media (min-width: 1280px) {
		margin: ${headerHeightDesktop}px 0 0;
		min-height: calc(100vh - ${headerHeightDesktop}px - ${footerHeight}px);
		background: none;
	}
`;

export const TopSection = styled.div`
	/* position: absolute; */
	/* top: ${headerHeightMobile}px; */
	/* width: 100%; */
	/* padding-bottom: 32px; */
	/* height: 200px; */
	background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
	/* padding: 20px; */

	@media (min-width: 1280px) {
		background: none;
		width: 936px;
		margin: 0 auto;
		padding-top: 24px;
	}
`;

export const Return = styled.div`
	margin: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 1280px) {
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

	@media (min-width: 1280px) {
		margin-top: 0;
		width: calc(936px + ((100% - 936px) / 2) - 32px);
		margin-left: calc(((100% - 936px) / 2) - 32px);
		box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.1);
		padding: 32px;
	}
`;

export const Content = styled.div`
	@media (min-width: 1280px) {
		width: calc(936px - 32px - 296px);
		padding-left: calc(32px + 296px);
	}
`;

export const Cover = styled.div``;
