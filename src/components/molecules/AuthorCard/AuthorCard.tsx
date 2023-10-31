import { FC } from 'react';
import * as Styled from './AuthorCard.styled';

interface AuthorCardProps {
	name: string;
	picture: string;
	booksCount: number;
}

export const AuthorCard: FC<AuthorCardProps> = ({ name, picture, booksCount }) => {
	return (
		<Styled.Container>
			<Styled.Photo src={picture} alt={name} />
			<Styled.Info>
				<Styled.Name>{name}</Styled.Name>
				<Styled.Works>{`${booksCount} ${booksCount > 1 ? 'livros' : 'livro'}`}</Styled.Works>
			</Styled.Info>
		</Styled.Container>
	);
};
