import { css } from 'styled-components';

const MainTheme = {
	color: {
		primary: '#A076F2',
		neutral: {
			gray: {
				light: '#f7f7f7',
				regular: '#9e9e9e',
				medium: '#757575',
				dark: '#555',
			},
			white: '#fff',
		},
	},

	typography: {
		title: {
			normal: css`
				font-size: 20px;
				font-style: normal;
				font-weight: 700;
				line-height: normal;
			`,
			medium: css`
				font-size: 28px;
				font-style: normal;
				font-weight: 700;
				line-height: normal;
			`,
			large: css`
				font-size: 34px;
				font-style: normal;
				font-weight: 700;
				line-height: normal;
			`,
		},

		subtitle: {
			normal: css`
				font-size: 14px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
			`,
			large: css`
				font-size: 24px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
			`,
		},

		body: {
			regular: css`
				font-size: 14px;
				font-style: normal;
				font-weight: 400;
			`,
			medium: css`
				font-size: 16px;
				font-style: normal;
				font-weight: 400;
				line-height: 23px;
			`,
			large: css`
				font-family: Roboto;
				font-size: 18px;
				font-style: normal;
				font-weight: 400;
				line-height: 23px;
			`,
		},

		button: {
			regular: css`
				text-align: center;
				font-size: 10px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
			`,
			medium: css`
				font-size: 14px;
				font-style: normal;
				font-weight: 500;
				line-height: 20px;
			`,
			bold: css`
				text-align: center;
				font-size: 14px;
				font-style: normal;
				font-weight: 700;
				line-height: normal;
			`,
			heavy: css`
				text-align: center;
				font-size: 16px;
				font-style: normal;
				font-weight: 700;
				line-height: normal;
			`,
			black: css`
				text-align: center;
				font-size: 18px;
				font-style: normal;
				font-weight: 700;
				line-height: normal;
			`,
		},
	},
};

export default MainTheme;
