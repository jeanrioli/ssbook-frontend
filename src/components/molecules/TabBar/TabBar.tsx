import { FC } from 'react';
import * as Styled from './TabBar.styled';

import { Button } from '../../atoms/Button';

interface TabBarProps {
	tabs: Array<Tabs>;
	selected: string;
	onSelect: (id: string) => void;
}

export type Tabs = {
	id: string;
	title: string;
};

export const TabBar: FC<TabBarProps> = ({ tabs, selected, onSelect }) => {
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
