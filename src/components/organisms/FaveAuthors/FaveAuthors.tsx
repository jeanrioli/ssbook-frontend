import { FC } from 'react';
import * as Styled from './FaveAuthors.styled';
import { CardList } from '../CardList';
import { WriterCard } from '../../molecules/AuthorCard';
import { Button } from '../../atoms/Button';
import { SectionTitle } from '../../atoms/SectionTitle';

export const FaveAuthors: FC = () => {
	const list = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<Styled.Container>
			<Styled.Top>
				<SectionTitle title='Autores favoritos' button={<Button variant='text' text='ver todos' />} />
			</Styled.Top>
			<CardList columns={3}>
				{list.map((item) => (
					<WriterCard
						name='Rick Riordan'
						photo='https://cdn.rickriordan.com/wp-content/uploads/2020/10/11224708/rick.jpg'
						works={9}
					/>
				))}
			</CardList>
		</Styled.Container>
	);
};
