import { FC } from 'react';
import * as Styled from './FaveBooks.styled';
import { CardList } from '../CardList';
import { BookCard } from '../../molecules';
import { Button, SectionTitle } from '../../atoms';

const list = [1, 2, 3, 4, 5, 6, 7, 8];

export const FaveBooks: FC = () => {
	return (
		<Styled.Container>
			<Styled.Top>
				<SectionTitle title='Livros favoritos' button={<Button variant='text' text='ver todos' />} />
			</Styled.Top>

			<CardList columns={6}>
				{list.map((item) => (
					<BookCard />
				))}
			</CardList>
		</Styled.Container>
	);
};
