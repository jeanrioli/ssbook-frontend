import 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
import { MainTheme } from './theme';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			primary: string;
			neutral: {
				gray: {
					light: string;
					regular: string;
					medium: string;
					dark: string;
				};
				white: string;
			};
		};

		typography: {
			title: {
				normal: FlattenSimpleInterpolation;
				medium: FlattenSimpleInterpolation;
				large: FlattenSimpleInterpolation;
			};

			subtitle: {
				normal: FlattenSimpleInterpolation;
				large: FlattenSimpleInterpolation;
			};

			body: {
				regular: FlattenSimpleInterpolation;
				medium: FlattenSimpleInterpolation;
				large: FlattenSimpleInterpolation;
			};

			button: {
				regular: FlattenSimpleInterpolation;
				medium: FlattenSimpleInterpolation;
				bold: FlattenSimpleInterpolation;
				heavy: FlattenSimpleInterpolation;
				black: FlattenSimpleInterpolation;
			};
		};
	}
}
