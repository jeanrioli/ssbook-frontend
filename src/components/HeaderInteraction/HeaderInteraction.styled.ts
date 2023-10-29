import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 24px;
	flex: 1;
	justify-content: flex-end;
	padding-left: 24px;
`;

export const DesktopInteraction = styled.div`
	display: none;
	width: 100%;

	@media (min-width: 1280px) {
		display: flex;
		align-items: center;
		gap: 24px;
	}
`;

export const Separator = styled.hr`
	height: 40px;
	width: 1px;
	background-color: #e4e4e4;
	margin: 0;
	border: none;
`;
