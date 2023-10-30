import { FC } from 'react';
import * as Styled from './BookCard.styled';

interface BookCardProps {
	variant?: 'vertical' | 'horizontal';
}

export const BookCard: FC<BookCardProps> = ({ variant = 'vertical' }) => {
	return (
		<Styled.Container variant={variant}>
			<Styled.Cover />
			<Styled.Info>
				<Styled.Title>O Ladrão de Raios - Percy Jackson e os Olimpianos 1</Styled.Title>
				<Styled.Author>Rick Riordan</Styled.Author>
			</Styled.Info>
		</Styled.Container>
	);
};
