import { FC } from 'react';
import * as Styled from './Cover.styled';
import { Button } from '../Button';
import { IconFave } from '../../../icons';

export const Cover: FC = () => {
	return (
		<Styled.Container>
			<Styled.Cover src='https://m.media-amazon.com/images/I/A1UjcPz4gZL._SL1500_.jpg' />
			<Button variant='icon' text='Adicionar favorito' icon={<IconFave />} />
			<Button variant='icon' text='Adicionar favorito' icon={<IconFave />} />
			<Button variant='icon' text='Adicionar favorito' icon={<IconFave />} />
		</Styled.Container>
	);
};
