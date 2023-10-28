import styled from 'styled-components';
import { bottomNavbarHeight, headerHeight } from '../../utils/constants';

export const Container = styled.div`
	margin-top: ${headerHeight}px;
	margin-bottom: ${bottomNavbarHeight}px;
	background-color: #f7f7f7;
	min-height: calc(100vh - ${headerHeight}px - ${bottomNavbarHeight}px);
	display: flex;
	flex-direction: column;
	@media (min-width: 1280px) {
		margin: ${headerHeight}px 0 0;
	}
`;

export const TopSection = styled.div`
	@media (min-width: 1280px) {
		width: 936px;
		margin: 0 auto;
	}
`;

export const BottomSection = styled.div`
	width: calc(936px + ((100% - 936px) / 2) - 32px);
	/* background-color: red; */
	/* align-self: flex-end; */
	margin-left: calc(((100% - 936px) / 2) - 32px);
	flex: 1;
	display: flex;
	background-color: #fff;
	border-radius: 32px 0 0;
	padding: 0 32px 60px 32px;
	box-shadow: -4px -4px 8px 0 rgba(0, 0, 0, 0.1);
	flex-direction: column;
`;

export const Content = styled.div`
	/* display: flex; */
	width: 936px;
	/* padding: 32px calc(13vw) 60px 0; */
	/* border-radius: 32px 0 0; */
	/* box-shadow: -4px -4px 8px 0 rgba(0, 0, 0, 0.1); */
	/* flex: 1; */
	/* background-color: #fff; */
`;
