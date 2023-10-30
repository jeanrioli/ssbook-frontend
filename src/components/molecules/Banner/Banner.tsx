import { FC } from 'react';
import * as Styled from './Banner.styled';
import { Button } from '../../atoms/Button';
import { IconFave, IconSave, IconShare } from '../../../icons';

export const Banner: FC = () => {
	const bannerButtons = [
		{ text: 'Favoritar', icon: <IconFave />, action: () => {} },
		{ text: 'Compartilhar', icon: <IconShare />, action: () => {} },
		{ text: 'Salvar em uma lista', icon: <IconSave />, action: () => {} },
	];

	return (
		<Styled.Container>
			<Styled.Cover src='https://m.media-amazon.com/images/I/A1UjcPz4gZL._SL1500_.jpg' />

			{bannerButtons.map((button, i) => (
				<Button variant='icon' text={button.text} icon={button.icon} onClick={button.action} key={i} />
			))}
		</Styled.Container>
	);
};
