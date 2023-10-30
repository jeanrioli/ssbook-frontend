import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 20px 20px;

	@media (min-width: 1280px) {
		padding: 0 0 24px;
	}
`;

export const Title = styled.div`
	color: #555;

	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

export const Pills = styled.div`
	padding: 0 0 20px;

	@media (min-width: 1280px) {
		padding: 0 0 24px;
	}
`;

export const Books = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	padding: 0 20px;

	@media (min-width: 1280px) {
		padding: 0;
	}
`;
