import { FC } from 'react';
import * as Styled from './Book.styled';

import { useParams } from 'react-router-dom';
import { BookTitle, Banner, MainSection, SectionTitle, About } from '../../components';
import { IconArrow, IconDots } from '../../icons';
import { Helmet } from 'react-helmet';

export const Book: FC = () => {
	const { bookId } = useParams();

	return (
		<Styled.Container>
			<Helmet>
				<title>Título do livro | SSBook</title>
			</Helmet>
			<Banner />
			<Styled.MobileView>
				<Styled.Top>
					<Styled.Overflow>
						<Styled.Return>
							<IconArrow />
							<IconDots />
						</Styled.Return>
					</Styled.Overflow>
				</Styled.Top>
			</Styled.MobileView>
			<Styled.DesktopView>
				<Styled.Top>
					<BookTitle />
				</Styled.Top>
			</Styled.DesktopView>
			<div style={{ flex: 1, display: 'flex' }}>
				<MainSection>
					<Styled.Content>
						<Styled.MobileView>
							<BookTitle />
						</Styled.MobileView>
						<About />
						<SectionTitle title='Sobre o Autor' />
						<About />{' '}
					</Styled.Content>
				</MainSection>
			</div>
		</Styled.Container>
	);
};
