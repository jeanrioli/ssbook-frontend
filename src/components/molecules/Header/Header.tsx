import { FC } from 'react';
import * as Styled from './Header.styled';

import { HeaderInteraction } from '../../organisms';

export const Header: FC = () => {
	return (
		<Styled.Container>
			<Styled.Position>
				<Styled.Content>
					<Styled.Logo src='logo/ssbook-color-logo.svg' alt='ssbook logo' />
					<HeaderInteraction />
				</Styled.Content>
			</Styled.Position>
		</Styled.Container>
	);
};
