import { FC } from 'react';
import * as Styled from './Library.styled';
import { CardList } from '../CardList';
import { Button } from '../Button';
import { BookCard } from '../BookCard';

export const Library: FC = () => {
	const categories = ['todos', 'terror', 'suspense', 'romance', 'aventura', 'comédia'];
	return (
		<Styled.Container>
			<Styled.Top>
				<Styled.Title>Biblioteca</Styled.Title>
			</Styled.Top>

			<Styled.Pills>
				<CardList columns={categories.length}>
					{categories.map((categoria, index) => (
						<Button variant='pill' text={categoria} isSelected={index === 0 ? true : false} />
					))}
				</CardList>
			</Styled.Pills>

			<Styled.Books>
				<BookCard variant='horizontal' />
				<BookCard variant='horizontal' />
				<BookCard variant='horizontal' />
				<BookCard variant='horizontal' />
				<BookCard variant='horizontal' />
				<BookCard variant='horizontal' />
				<BookCard variant='horizontal' />
			</Styled.Books>
		</Styled.Container>
	);
};
