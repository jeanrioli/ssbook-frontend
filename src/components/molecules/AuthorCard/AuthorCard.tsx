import { FC } from 'react';
import * as Styled from './AuthorCard.styled';

interface WriterCardProps {
	name: string;
	photo: string;
	works: number;
}

export const WriterCard: FC<WriterCardProps> = ({ name, photo, works }) => {
	return (
		<Styled.Container>
			<Styled.Photo src={photo} />
			<Styled.Info>
				<Styled.Name>{name}</Styled.Name>
				<Styled.Works>{`${works} ${works > 1 ? 'livros' : 'livro'}`}</Styled.Works>
			</Styled.Info>
		</Styled.Container>
	);
};
