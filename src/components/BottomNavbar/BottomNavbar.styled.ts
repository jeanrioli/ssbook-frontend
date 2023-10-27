import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background: #fff;
	box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.08);
	height: 56px;
	position: fixed;
	bottom: 0;
	z-index: 99;

	@media (min-width: 768px) {
		display: none;
	}
`;
