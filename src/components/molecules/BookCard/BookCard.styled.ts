import styled, { css } from 'styled-components';
import { DESKTOP_BREAKPOINT } from '../../../utils';

export const Container = styled.div<{ $variant: 'vertical' | 'horizontal' }>`
	width: 136px;
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;

	${({ $variant }) =>
		$variant === 'vertical' &&
		css`
			flex-direction: column;
		`}

	${({ $variant }) =>
		$variant === 'horizontal' &&
		css`
			width: 100%;

			${Cover} {
				height: 70px;
				width: 48px;
				border-radius: 8px;

				@media (min-width: ${DESKTOP_BREAKPOINT}) {
					height: 100px;
					width: 68px;
				}
			}

			${Info} {
				height: 70px;
				justify-content: center;
				gap: 6px;

				@media (min-width: ${DESKTOP_BREAKPOINT}) {
					height: 100px;
				}
			}

			${Title} {
				@media (min-width: ${DESKTOP_BREAKPOINT}) {
					-webkit-line-clamp: 3;
				}
			}
		`}
`;

export const Cover = styled.img`
	height: 198px;
	width: 100%;
	border-radius: 8px;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
`;

export const Title = styled.div`
	${({ theme }) => theme.typography.button.heavy};
	color: ${({ theme }) => theme.color.neutral.gray.dark};
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	text-align: left;

	overflow: hidden;
	text-overflow: ellipsis;
	white-space: initial;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

export const Author = styled.div`
	${({ theme }) => theme.typography.body.regular};
	color: ${({ theme }) => theme.color.neutral.gray.medium};
`;
