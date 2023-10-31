import { FC } from 'react';
import * as Styled from './Header.styled';

import { HeaderInteraction } from '../../organisms';
import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
	const navigate = useNavigate();

	return (
		<Styled.Container>
			<Styled.Position>
				<Styled.Content>
					<Styled.Logo src='/logo/ssbook-color-logo.svg' alt='ssbook logo' onClick={() => navigate('/')} />
					<HeaderInteraction />
				</Styled.Content>
			</Styled.Position>
		</Styled.Container>
	);
};
