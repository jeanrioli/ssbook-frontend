import { HeaderInteraction } from '../HeaderInteraction';
import { Profile } from '../Profile';
import * as Styled from './Header.styled';

export const Header = () => {
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
