import styled from 'styled-components';
import { CONTENT_WIDTH, DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.footer`
	display: none;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.color.primary};
		height: 80px;
	}
`;
export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: ${CONTENT_WIDTH};
`;

export const Logo = styled.img``;

export const Copyright = styled.div`
	${({ theme }) => theme.typography.body.small};
	color: ${({ theme }) => theme.color.neutral.white};
	text-align: right;
`;
