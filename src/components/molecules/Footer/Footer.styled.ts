import styled from 'styled-components';

export const Container = styled.div`
	display: none;

	@media screen and (min-width: 1280px) {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #a076f2;
		height: 80px;
	}
`;
export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	width: 936px;
`;

export const Logo = styled.img``;

export const Copyright = styled.div`
	color: #fff;
	text-align: right;
`;
