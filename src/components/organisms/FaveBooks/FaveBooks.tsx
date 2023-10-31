import { FC } from 'react';
import * as Styled from './FaveBooks.styled';
import { CardList } from '../CardList';
import { BookCard } from '../../molecules';
import { Button, SectionTitle } from '../../atoms';
import { useFaveBooks } from '../../../services';

export const FaveBooks: FC = () => {
	const response = useFaveBooks();

	return (
		<Styled.Container>
			<Styled.Top>
				<SectionTitle title='Livros favoritos' button={<Button variant='text' text='ver todos' />} />
			</Styled.Top>

			<CardList columns={6}>
				{response?.favoriteBooks.map((book, i) => (
					<BookCard name={book.name} cover={book.cover} author={book.author.name} key={i} />
				))}
			</CardList>
		</Styled.Container>
	);
};
