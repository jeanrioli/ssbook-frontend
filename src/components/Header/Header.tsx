import { Profile } from '../Profile';
import * as Styled from './Header.styled';

export const Header = () => {
	return (
		<Styled.Container>
			<img src='logo/ssbook-color-logo.svg' />
			<Profile />
		</Styled.Container>
	);
};
