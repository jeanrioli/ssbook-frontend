import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 1280px) {
		align-items: baseline;
	}
`;

export const Title = styled.div`
	color: #555;

	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;

	@media (min-width: 1280px) {
		font-size: 28px;
	}
`;

export const Button = styled.div``;
