import { FC } from 'react';
import * as Styled from './Banner.styled';

import { Button } from '../../atoms/Button';
import { IconFave, IconSave, IconShare } from '../../../icons';

interface BannerProps {
	cover: string;
	name: string;
}

export const Banner: FC<BannerProps> = ({ cover, name }) => {
	const bannerButtons = [
		{ text: 'Favoritar', icon: <IconFave />, action: () => {} },
		{ text: 'Compartilhar', icon: <IconShare />, action: () => {} },
		{ text: 'Salvar em uma lista', icon: <IconSave />, action: () => {} },
	];

	return (
		<Styled.Container>
			<Styled.Cover src={cover} alt={name} />
			{bannerButtons.map((button, i) => (
				<Button variant='icon' text={button.text} icon={button.icon} onClick={button.action} key={i} />
			))}
		</Styled.Container>
	);
};
