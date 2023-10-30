import { FC } from 'react';
import * as Styled from './Library.styled';
import { PillList } from '../PillList';
import { Button } from '../../atoms/Button';
import { BookCard } from '../../molecules/BookCard';
import { SectionTitle } from '../../atoms/SectionTitle';

export const Library: FC = () => {
	const categories = ['Todos', 'terror', 'suspense', 'romance', 'aventura', 'comédia'];
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
