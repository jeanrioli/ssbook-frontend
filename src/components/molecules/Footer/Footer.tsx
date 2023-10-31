import * as Styled from './Footer.styled';

export const Footer = () => {
	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.Logo src='/logo/ssbook-white-logo.svg' alt='ssbook logo' />
				<Styled.Copyright>
					Todos os direitos reservados. <br />
					Studio Sol Books © 2023{' '}
				</Styled.Copyright>
			</Styled.Content>
		</Styled.Container>
	);
};
