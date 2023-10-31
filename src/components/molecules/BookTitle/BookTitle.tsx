import { FC } from 'react';
import * as Styled from './BookTitle.styled';

import { Button } from '../../atoms';
import { IconFaveOutlined } from '../../../icons';

interface BookTitleProps {
	title: string;
	author: string;
}

export const BookTitle: FC<BookTitleProps> = ({ title, author }) => {
	return (
		<Styled.Container>
			<Styled.Title>{title}</Styled.Title>
			<Styled.Button>
				<Button variant='icon' icon={<IconFaveOutlined />} />
			</Styled.Button>
			<Styled.Author>{author}</Styled.Author>
		</Styled.Container>
	);
};
