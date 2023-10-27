import styled, { css } from 'styled-components';

export const Container = styled.div<{ variant: 'vertical' | 'horizontal' }>`
	/* /* height: 262px; */
	width: 136px;
	display: flex;
	gap: 8px;

	${({ variant }) =>
		variant === 'vertical' &&
		css`
			flex-direction: column;
		`}

	${({ variant }) =>
		variant === 'horizontal' &&
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
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@supports (-webkit-line-clamp: 2) {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: initial;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	color: #555;

	font-family: Roboto;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 18px;
`;

export const Author = styled.div`
	color: #757575;

	font-family: Roboto;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
