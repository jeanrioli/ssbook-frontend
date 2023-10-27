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

export const List = styled.div<{ gap: number }>`
	display: flex;
	height: 100%;
	overflow-x: scroll;
	gap: ${({ gap }) => gap}px;
`;

export const Item = styled.div`
	flex-shrink: 0;
`;
