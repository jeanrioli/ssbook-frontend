import styled from 'styled-components';

export const Container = styled.div`
	display: none;
	background-color: #a076f2;
	padding: 16px 20px;

	@media screen and (min-width: 768px) {
		display: block;
	}
`;
export const Content = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	max-width: 936px;
`;

export const Logo = styled.img``;

export const Copyright = styled.div`
	color: #fff;
	text-align: right;
`;
