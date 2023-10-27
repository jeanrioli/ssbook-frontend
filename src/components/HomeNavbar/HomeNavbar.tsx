import { FC } from 'react';
import * as Styled from './HomeNavbar.styled';

import { HomeNavbarButton } from '../HomeNavbarButton';
import { Tabs } from '../MyBooks';

interface HomeNavbarProps {
	tabs: Array<Tabs>;
	selected: string;
	onSelect: (id: string) => void;
}

export const HomeNavbar: FC<HomeNavbarProps> = ({ tabs, selected, onSelect }) => {
	return (
		<Styled.Container>
			{tabs.map((tab) => (
				<HomeNavbarButton
					key={tab.id}
					label={tab.title}
					isSelected={tab.id === selected}
					onClick={() => onSelect(tab.id)}
				/>
			))}
		</Styled.Container>
	);
};
