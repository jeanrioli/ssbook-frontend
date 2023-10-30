import { FC } from 'react';
import * as Styled from './HeaderInteraction.styled';
import { NavbarButton } from '../../atoms/NavbarButton';
import { IconAdd, IconFave } from '../../../icons';
import { Profile } from '../../atoms/Profile';

export const HeaderInteraction: FC = () => {
	const buttons = [
		{ label: 'Adicionar', icon: <IconAdd /> },
		{ label: 'Favoritos', icon: <IconFave /> },
	];

	return (
		<Styled.Container>
			<Styled.DesktopInteraction>
				<input style={{ flex: 1 }} />
				{buttons.map((button, i) => (
					<NavbarButton variant='horizontal' label={button.label} icon={button.icon} isSelected={true} key={i} />
				))}
				<Styled.Separator />
			</Styled.DesktopInteraction>
			<Profile />
		</Styled.Container>
	);
};
