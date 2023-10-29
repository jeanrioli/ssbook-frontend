import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const Content = styled.div`
	width: 100%;

	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const List = styled.div`
	display: flex;
	height: 100%;
	overflow-x: scroll;
	gap: 8px;
	padding: 0 20px;

	@media (min-width: 1280px) {
		padding: 0;
	}
`;

export const Item = styled.div`
	flex-shrink: 0;
`;
