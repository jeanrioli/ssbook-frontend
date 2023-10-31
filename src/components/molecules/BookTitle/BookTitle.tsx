import { FC } from 'react';
import * as Styled from './BookTitle.styled';
import { Button } from '../../atoms';
import { IconFaveOutlined } from '../../../icons';

export const BookTitle: FC = () => {
	return (
		<Styled.Container>
			<Styled.Title>O Ladrão de Raios - Percy Jackson e os Olimpianos 1</Styled.Title>
			<Styled.Button>
				<Button variant='icon' icon={<IconFaveOutlined />} />
			</Styled.Button>
			<Styled.Author>Rick Riordan</Styled.Author>
		</Styled.Container>
	);
};
