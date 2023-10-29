import { FC } from 'react';
import * as Styled from './Library.styled';
import { PillList } from '../PillList';
import { Button } from '../Button';
import { BookCard } from '../BookCard';

export const Library: FC = () => {
	const categories = ['Todos', 'terror', 'suspense', 'romance', 'aventura', 'comédia'];
	return (
		<Styled.Container>
			<Styled.Top>
				<Styled.Title>Biblioteca</Styled.Title>
			</Styled.Top>

			<Styled.Pills>
				<PillList>
					{categories.map((categoria, index) => (
						<Button variant='contained' text={categoria} isSelected={index === 0 ? true : false} />
					))}
				</PillList>
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
