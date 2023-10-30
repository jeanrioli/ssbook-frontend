import styled from 'styled-components';
import { DESKTOP_BREAKPOINT, CONTENT_WIDTH } from '../../../utils';

export const Container = styled.div`
	display: none;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 296px;
		position: absolute;
		top: 72px;
		left: calc(((100% - ${CONTENT_WIDTH}) / 2));
	}
`;

export const Cover = styled.img`
	height: 433px;
	width: 100%;
	object-fit: contain;
`;
