import { FC, useEffect } from 'react';
import * as Styled from './Book.styled';

import { useParams } from 'react-router-dom';
import { BookTitle, Banner, MainSection, SectionTitle, Description } from '../../components';
import { IconArrow, IconDots } from '../../icons';
import { Helmet } from 'react-helmet';
import { useBook } from '../../services';

export const Book: FC = () => {
	const { bookId } = useParams();

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	const response = useBook(bookId!);

	return (
		<Styled.Container $url={response?.book.cover}>
			<Helmet>
				<title>{`${response?.book.name} | SSBook`}</title>
			</Helmet>
			<Banner cover={response?.book.cover} name={response?.book.name} />
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
					<BookTitle title={response?.book.name} author={response?.book.author.name} />
				</Styled.Top>
			</Styled.DesktopView>
			<Styled.SectionContainer>
				<MainSection>
					<Styled.Content>
						<Styled.MobileView>
							<BookTitle title={response?.book.name} author={response?.book.author.name} />
						</Styled.MobileView>
						<Description description={response?.book.description} />
						<Styled.About>
							<SectionTitle title='Sobre o Autor' />
							<Description description={'...'} />
						</Styled.About>
					</Styled.Content>
				</MainSection>
			</Styled.SectionContainer>
		</Styled.Container>
	);
};
