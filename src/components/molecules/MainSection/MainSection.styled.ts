import styled from 'styled-components';
import { CONTENT_WIDTH, DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div`
	flex: 1;
	display: flex;
	background-color: ${({ theme }) => theme.color.neutral.white};
	border-radius: 32px 0 0;
	padding: 32px 0;
	flex-direction: column;
	box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.05);

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		width: calc(${CONTENT_WIDTH} + ((100% - ${CONTENT_WIDTH}) / 2) - 32px);
		margin-left: calc(((100% - ${CONTENT_WIDTH}) / 2) - 32px);
		box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.1);
		padding: 32px;
	}
`;
