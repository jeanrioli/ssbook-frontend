import { FC } from 'react';
import * as Styled from './BookCard.styled';

interface BookCardProps {
	name: string;
	cover: string;
	author: string;
	onClick?: () => void;
	variant?: 'vertical' | 'horizontal';
}

export const BookCard: FC<BookCardProps> = ({ name, cover, author, onClick, variant = 'vertical' }) => {
	return (
		<Styled.Container $variant={variant} onClick={onClick}>
			<Styled.Cover src={cover} alt={name} />
			<Styled.Info>
				<Styled.Title>{name}</Styled.Title>
				<Styled.Author>{author}</Styled.Author>
			</Styled.Info>
		</Styled.Container>
	);
};
