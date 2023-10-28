import { FC, useState } from 'react';
import * as Styled from './MyBooks.styled';

import { HomeNavbar } from '../HomeNavbar';
import { HorizontalList } from '../HorizontalList';
import { BookCard } from '../BookCard';

export type Tabs = {
	id: string;
	title: string;
};

const tabs: Array<Tabs> = [
	{ id: 'MyBooks', title: 'Meus livros' },
	{ id: 'Borrowed', title: 'Emprestados' },
];

const list = [1, 2, 3, 4, 5, 6, 7, 8];

export const MyBooks: FC = () => {
	const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

	return (
		<Styled.Container>
			<HomeNavbar tabs={tabs} selected={activeTab} onSelect={setActiveTab} />
			<Styled.Top>
				<Styled.Title>Livros favoritos</Styled.Title>
				<Styled.More>ver todos</Styled.More>
			</Styled.Top>
			{activeTab === 'MyBooks' && (
				<HorizontalList columns={6}>
					{list.map((item) => (
						<BookCard />
					))}
				</HorizontalList>
			)}
			{activeTab === 'Borrowed' && <>Emprestados...</>}
		</Styled.Container>
	);
};
