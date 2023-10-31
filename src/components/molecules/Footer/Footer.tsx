import { SS_COPYRIGHT } from '../../../utils';
import * as Styled from './Footer.styled';

import parse from 'html-react-parser';

export const Footer = () => {
	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.Logo src='/logo/ssbook-white-logo.svg' alt='ssbook logo' />
				<Styled.Copyright>{parse(SS_COPYRIGHT)}</Styled.Copyright>
			</Styled.Content>
		</Styled.Container>
	);
};
