import styled, { css } from 'styled-components';

export const Container = styled.div<{ $variant: 'vertical' | 'horizontal' }>`
	width: 136px;
	display: flex;
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
			}

			${Info} {
				height: 70px;
				justify-content: center;
				gap: 4px;
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
`;

export const Title = styled.div`
	${({ theme }) => theme.typography.button.heavy};
	color: ${({ theme }) => theme.color.neutral.gray.dark};
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	text-align: left;

	@supports (-webkit-line-clamp: 2) {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: initial;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
`;

export const Author = styled.div`
	${({ theme }) => theme.typography.body.regular};
	color: ${({ theme }) => theme.color.neutral.gray.medium};
`;
