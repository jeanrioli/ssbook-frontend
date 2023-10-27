import styled from 'styled-components';
import { bottomNavbarHeight, headerHeight } from '../../utils/constants';

export const Container = styled.div`
	margin-top: ${headerHeight}px;
	margin-bottom: ${bottomNavbarHeight}px;
	background-color: #f7f7f7;
	min-height: calc(100vh - ${headerHeight}px - ${bottomNavbarHeight}px);
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		margin: 0;
	}
`;

export const TopSection = styled.div``;

export const BottomSection = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 32px 0 0;
	background: #fff;
	height: 32px;
	border-radius: 32px 0 0;
	box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05);
	flex: 1;
`;
