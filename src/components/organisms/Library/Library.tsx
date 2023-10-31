import { FC, useEffect, useState } from 'react';
import * as Styled from './Library.styled';

import { PillList } from '../PillList';
import { BookCard } from '../../molecules/BookCard';
import { Button, SectionTitle } from '../../atoms';
import { useAllBooks } from '../../../services';
import { useNavigate } from 'react-router-dom';

export const Library: FC = () => {
	const navigate = useNavigate();
	const [categories, setCategories] = useState<Array<string>>([]);

	const response = useAllBooks();

	const filterCategories = () => {
		let existingCategories: Array<string> = [];

		response?.allBooks.forEach((book) => {
			if (!existingCategories.includes(book.category)) {
				existingCategories.push(book.category);
			}
		});

		existingCategories.sort();
		existingCategories.unshift('TODOS');

		setCategories(existingCategories);
	};

	useEffect(() => {
		filterCategories();
	}, [response?.allBooks]);

	return (
		<Styled.Container>
			<Styled.Top>
				<SectionTitle title='Biblioteca' />
			</Styled.Top>

			<Styled.Pills>
				<PillList>
					{categories.map((category, i) => (
						<Button variant='contained' text={category} isSelected={i === 0 ? true : false} key={i} />
					))}
				</PillList>
			</Styled.Pills>

			<Styled.Books>
				{response?.allBooks.map((book) => (
					<BookCard
						variant='horizontal'
						name={book.name}
						cover={book.cover}
						author={book.author.name}
						onClick={() => navigate(`/book/${book.id}`)}
						key={book.id}
					/>
				))}
			</Styled.Books>
		</Styled.Container>
	);
};
