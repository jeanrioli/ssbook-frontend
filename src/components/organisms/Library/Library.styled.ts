import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
`;

export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 20px 20px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		padding: 0 0 24px;
	}
`;

export const Pills = styled.div`
	padding: 0 0 20px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		padding: 0 0 24px;
	}
`;

export const Books = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 0 20px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
`;
