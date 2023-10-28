import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background: #fff;
	box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.08);
	height: 56px;
	position: fixed;
	bottom: 0;
	z-index: 99;
	display: flex;
	align-items: center;

	@media (min-width: 768px) {
		display: none;
	}
`;

export const Navigation = styled.nav`
	margin: 0 auto;
	width: max-content;
	display: flex;
	gap: 28px;
`;
