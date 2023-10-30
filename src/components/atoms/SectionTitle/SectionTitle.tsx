import { FC } from 'react';
import * as Styled from './SectionTitle.styled';

interface TitleProps {
	title: string;
	button?: JSX.Element;
}

export const SectionTitle: FC<TitleProps> = ({ title, button }) => {
	return (
		<Styled.Container>
			<Styled.Title>{title}</Styled.Title>
			<Styled.Button>{button}</Styled.Button>
		</Styled.Container>
	);
};
