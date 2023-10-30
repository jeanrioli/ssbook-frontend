import { FC } from 'react';
import * as Styled from './Cover.styled';
import { Button } from '../Button';
import { IconFave } from '../../icons';

export const Cover: FC = () => {
	return (
		<Styled.Container>
			<Styled.Cover></Styled.Cover>
			<Button variant='icon' text='Adicionar favorito' icon={<IconFave />} />
			<Button variant='icon' text='Adicionar favorito' icon={<IconFave />} />
			<Button variant='icon' text='Adicionar favorito' icon={<IconFave />} />
		</Styled.Container>
	);
};
