import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const Content = styled.div`
	width: 100%;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const List = styled.div<{ columns: number }>`
	display: flex;
	height: 100%;
	overflow-x: scroll;
	gap: 20px;
	padding: 0 20px;

	@media (min-width: 1280px) {
		gap: 24px;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
		:nth-child(n + ${({ columns }) => columns + 1}) {
			display: none;
		}
	}
`;

export const Item = styled.div`
	flex-shrink: 0;
`;
