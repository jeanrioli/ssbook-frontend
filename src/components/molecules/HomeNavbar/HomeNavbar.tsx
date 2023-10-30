import { FC } from 'react';
import * as Styled from './HomeNavbar.styled';

import { Tabs } from '../../organisms/MyBooks';
import { Button } from '../../atoms/Button';

interface HomeNavbarProps {
	tabs: Array<Tabs>;
	selected: string;
	onSelect: (id: string) => void;
}

export const HomeNavbar: FC<HomeNavbarProps> = ({ tabs, selected, onSelect }) => {
	return (
		<Styled.Container>
			{tabs.map((tab) => (
				<Button
					variant='underlined'
					text={tab.title}
					isSelected={tab.id === selected}
					onClick={() => onSelect(tab.id)}
				/>
			))}
		</Styled.Container>
	);
};
