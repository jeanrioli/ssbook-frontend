import { Profile } from '../Profile';
import * as Styled from './Header.styled';

export const Header = () => {
	return (
		<Styled.Container>
			<Styled.Position>
				<Styled.Content>
					<img src='logo/ssbook-color-logo.svg' alt='ssbook logo' />
					<Profile />
				</Styled.Content>
			</Styled.Position>
		</Styled.Container>
	);
};
