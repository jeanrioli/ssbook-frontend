import { FC } from 'react';
import * as Styled from './Library.styled';
import { PillList } from '../PillList';
import { BookCard } from '../../molecules/BookCard';
import { Button, SectionTitle } from '../../atoms';
import { useAllBooks } from '../../../services';

export const Library: FC = () => {
	const response = useAllBooks();

	let categories = ['TODOS'];
	response?.allBooks.forEach((book) => {
		if (!categories.includes(book.category)) {
			categories.push(book.category);
		}
	});

	console.log(categories);

	return (
		<Styled.Container>
			<Styled.Top>
				<SectionTitle title='Biblioteca' />
			</Styled.Top>

			<Styled.Pills>
				<PillList>
					{categories.map((categoria, i) => (
						<Button variant='contained' text={categoria} isSelected={i === 0 ? true : false} key={i} />
					))}
				</PillList>
			</Styled.Pills>

			<Styled.Books>
				{response?.allBooks.map((book, i) => (
					<BookCard variant='horizontal' name={book.name} cover={book.cover} author={book.author.name} key={i} />
				))}
			</Styled.Books>
		</Styled.Container>
	);
};
