import styled from 'styled-components';
import { bottomNavbarHeight, headerHeightMobile, headerHeightDesktop } from '../../utils/constants';

export const Container = styled.div`
	margin-top: ${headerHeightMobile}px;
	margin-bottom: ${bottomNavbarHeight}px;
	background-color: #f7f7f7;
	min-height: calc(100vh - ${headerHeightMobile}px - ${bottomNavbarHeight}px);
	display: flex;
	flex-direction: column;
	@media (min-width: 1280px) {
		margin: ${headerHeightDesktop}px 0 0;
	}
`;

export const TopSection = styled.div`
	padding-bottom: 32px;

	@media (min-width: 1280px) {
		width: 936px;
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

	@media (min-width: 1280px) {
		width: calc(936px + ((100% - 936px) / 2) - 32px);
		margin-left: calc(((100% - 936px) / 2) - 32px);
		box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.1);
		padding: 32px;
	}
`;

export const Content = styled.div`
	@media (min-width: 1280px) {
		width: 936px;
	}
`;
