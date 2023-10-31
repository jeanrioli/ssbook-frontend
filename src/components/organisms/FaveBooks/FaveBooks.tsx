import { FC } from 'react';
import * as Styled from './FaveBooks.styled';

import { CardList } from '../CardList';
import { BookCard } from '../../molecules';
import { Button, SectionTitle } from '../../atoms';
import { useFaveBooks } from '../../../services';
import { useNavigate } from 'react-router-dom';

export const FaveBooks: FC = () => {
	const navigate = useNavigate();

	const response = useFaveBooks();

	return (
		<Styled.Container>
			<Styled.Top>
				<SectionTitle title='Livros favoritos' button={<Button variant='text' text='ver todos' />} />
			</Styled.Top>
			<CardList columns={6}>
				{response?.favoriteBooks.map((book) => (
					<BookCard
						name={book.name}
						cover={book.cover}
						author={book.author.name}
						onClick={() => navigate(`/book/${book.id}`)}
						key={book.id}
					/>
				))}
			</CardList>
		</Styled.Container>
	);
};
