import { FC } from 'react';
import * as Styled from './Book.styled';
import { useParams } from 'react-router-dom';
import { Cover, MainSection, SectionTitle } from '../../components';
import { IconArrow } from '../../icons/IconArrow';
import { IconDots } from '../../icons/IconDots';

export const Book: FC = () => {
	const { bookId } = useParams();

	return (
		<Styled.Container>
			<Cover />
			<Styled.MobileView>
				<Styled.Overflow>
					<Styled.Return>
						<IconArrow />
						<IconDots />
					</Styled.Return>
				</Styled.Overflow>
			</Styled.MobileView>
			<Styled.DesktopView>{/* <>Testando</> */}</Styled.DesktopView>
			<div style={{ flex: 1, display: 'flex' }}>
				<MainSection>
					<Styled.Content>
						Simon Basset, o irresistível duque de Hastings, acaba de retornar a Londres depois de seis anos viajando
						pelo mundo. Rico, bonito e solteiro, ele é um prato cheio para as mães da alta sociedade, que só pensam em
						arrumar um bom partido para suas filhas.
						<br />
						<br />
						Simon, porém, tem o firme propósito de nunca se casar. Assim, para se livrar das garras dessas mulheres,
						precisa de um plano infalível.
						<br />
						<br />
						É quando entra em cena Daphne Bridgerton, a irmã mais nova de seu melhor amigo. Apesar de espirituosa e dona
						de uma personalidade marcante, todos os homens que se interessam por ela são velhos demais, pouco
						inteligentes ou destituídos de qualquer tipo de charme. E os que têm potencial para ser bons maridos só a
						veem como uma boa amiga.
						<br />
						<br />
						A ideia de Simon é fingir que a corteja. Dessa forma, de uma tacada só, ele conseguirá afastar as jovens
						obcecadas por um marido e atrairá vários pretendentes para Daphne. Afinal, se um duque está interessado
						nela, a jovem deve ter mais atrativos do que aparenta.
						<br />
						<br />
						<br />
						<SectionTitle title='Sobre o Autor' />
						<br />
						<br />
						JULIA QUINN começou a trabalhar em seu primeiro romance um mês de - pois de terminar a faculdade e nunca
						mais parou de escrever. Seus livros foram traduzidos para 37 idiomas e, no Brasil, venderam mais de 2,5
						milhões de exemplares. A série Os Bridgertons foi adaptada pela Netflix e se tornou um sucesso instantâneo,
						quebrando os recordes de audiência da plataforma. Julia foi a autora mais jovem a ser incluída na Galeria da
						Fama dos Escritores Românticos dos Estados Unidos.
					</Styled.Content>
				</MainSection>
			</div>
		</Styled.Container>
	);
};
