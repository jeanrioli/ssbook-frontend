import { FC } from 'react';
import * as Styled from './FaveAuthors.styled';
import { Button, SectionTitle } from '../../atoms';
import { WriterCard } from '../../molecules';
import { CardList } from '../CardList';

export const FaveAuthors: FC = () => {
	const list = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<Styled.Container>
			<Styled.Top>
				<SectionTitle title='Autores favoritos' button={<Button variant='text' text='ver todos' />} />
			</Styled.Top>

			<CardList columns={3}>
				{list.map((item, i) => (
					<WriterCard
						name='Rick Riordan'
						photo='https://cdn.rickriordan.com/wp-content/uploads/2020/10/11224708/rick.jpg'
						works={9}
						key={i}
					/>
				))}
			</CardList>
		</Styled.Container>
	);
};
