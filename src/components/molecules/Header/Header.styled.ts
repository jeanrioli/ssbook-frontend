import styled from 'styled-components';
import { CONTENT_WIDTH, DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 99;
	background-color: ${({ theme }) => theme.color.neutral.white};
	display: flex;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		justify-content: flex-end;
		width: calc(${CONTENT_WIDTH} + ((100% - ${CONTENT_WIDTH}) / 2) + 32px);
		margin-right: calc(((100% - ${CONTENT_WIDTH}) / 2) + 32px);
		box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.1);
		border-radius: 0 0 32px 0;
	}
`;

export const Logo = styled.img`
	cursor: pointer;
`;

export const Position = styled.div`
	width: 100%;
	padding: 6px 20px;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		width: auto;
		padding: 12px 32px 12px 0;
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	width: 100%;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		width: ${CONTENT_WIDTH};
	}
`;
