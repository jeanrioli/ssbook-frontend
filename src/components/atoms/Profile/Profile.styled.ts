import styled from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
`;

export const Photo = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	object-fit: cover;
`;

export const Username = styled.div`
	display: none;

	@media (min-width: ${DESKTOP_BREAKPOINT}) {
		${({ theme }) => theme.typography.button.bold};
		color: ${({ theme }) => theme.color.neutral.gray.dark};
		display: block;
	}
`;
