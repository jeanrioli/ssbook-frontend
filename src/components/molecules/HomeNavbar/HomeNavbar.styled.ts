import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	padding: 0 20px;
	border-radius: 0px 0px 32px 0px;
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
	display: flex;
	gap: 20px;

	@media (min-width: 1280px) {
		background-color: transparent;
		border-radius: 0 0 0 0;
		box-shadow: none;
		border-bottom: 1px solid #e7e7e7;
		padding: 0;
	}
`;
