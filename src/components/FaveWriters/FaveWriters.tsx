import { FC } from 'react';
import * as Styled from './FaveWriters.styled';
import { CardList } from '../CardList';
import { WriterCard } from '../WiterCard';

export const FaveWriters: FC = () => {
	const list = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<Styled.Container>
			<Styled.Top>
				<Styled.Title>Autores favoritos</Styled.Title>
				<Styled.More>ver todos</Styled.More>
			</Styled.Top>
			<CardList columns={3}>
				{list.map((item) => (
					<WriterCard
						name='Rick Riordan'
						photo='https://cdn.rickriordan.com/wp-content/uploads/2020/10/11224708/rick.jpg '
						works={9}
					/>
				))}
			</CardList>
		</Styled.Container>
	);
};
