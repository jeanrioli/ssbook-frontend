import { FC } from 'react';
import * as Styled from './HeaderInteraction.styled';

import { IconAdd, IconFave, IconSearch } from '../../../icons';
import { Input, ButtonNavbar, Profile } from '../../atoms';
import { useUserPicture } from '../../../services';

const buttons = [
	{ label: 'Adicionar', icon: <IconAdd /> },
	{ label: 'Favoritos', icon: <IconFave /> },
];

export const HeaderInteraction: FC = () => {
	const response = useUserPicture();

	return (
		<Styled.Container>
			<Styled.DesktopInteraction>
				<Styled.InputContainer>
					<Input placeholder='Busque um livro' icon={<IconSearch />} />
				</Styled.InputContainer>
				{buttons.map((button, i) => (
					<ButtonNavbar variant='horizontal' label={button.label} icon={button.icon} isSelected={true} key={i} />
				))}
				<Styled.Separator />
			</Styled.DesktopInteraction>
			<Profile username='Neytiri' avatar={response?.userPicture} />
		</Styled.Container>
	);
};
