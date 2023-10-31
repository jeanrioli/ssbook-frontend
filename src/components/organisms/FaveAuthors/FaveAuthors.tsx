import { FC } from 'react';
import * as Styled from './FaveAuthors.styled';
import { Button, SectionTitle } from '../../atoms';
import { AuthorCard } from '../../molecules';
import { CardList } from '../CardList';
import { useFaveAuthors } from '../../../services';

export const FaveAuthors: FC = () => {
	const response = useFaveAuthors();

	return (
		<Styled.Container>
			<Styled.Top>
				<SectionTitle title='Autores favoritos' button={<Button variant='text' text='ver todos' />} />
			</Styled.Top>

			<CardList columns={3}>
				{response?.favoriteAuthors.map((author, i) => (
					<AuthorCard name={author.name} picture={author.picture} booksCount={author.booksCount} key={i} />
				))}
			</CardList>
		</Styled.Container>
	);
};
