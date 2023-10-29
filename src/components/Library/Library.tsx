import { FC } from 'react';
import * as Styled from './Library.styled';
import { HorizontalList } from '../HorizontalList';
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
				<HorizontalList columns={categories.length}>
					{categories.map((categoria, index) => (
						<Button variant='pill' text={categoria} isSelected={index === 0 ? true : false} />
					))}
				</HorizontalList>
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
