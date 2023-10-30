import styled from 'styled-components';

export const Container = styled.div`
	display: none;

	@media (min-width: 1280px) {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 296px;
		position: absolute;
		top: 72px;
		left: calc(((100% - 936px) / 2));
	}
`;

export const Cover = styled.div`
	height: 433px;
	width: 100%;
	background-color: red;
`;
