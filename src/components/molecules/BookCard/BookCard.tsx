import { FC } from 'react';
import * as Styled from './BookCard.styled';

interface BookCardProps {
	name: string;
	cover: string;
	author: string;
	variant?: 'vertical' | 'horizontal';
}

export const BookCard: FC<BookCardProps> = ({ name, cover, author, variant = 'vertical' }) => {
	return (
		<Styled.Container $variant={variant}>
			<Styled.Cover src={cover} />
			<Styled.Info>
				<Styled.Title>{name}</Styled.Title>
				<Styled.Author>{author}</Styled.Author>
			</Styled.Info>
		</Styled.Container>
	);
};
