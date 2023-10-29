import { FC, useState } from 'react';
import * as Styled from './MyBooks.styled';

import { HomeNavbar } from '../HomeNavbar';
import { CardList } from '../CardList';
import { BookCard } from '../BookCard';
import { Button } from '../Button';

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
			<Styled.Tabs>
				<HomeNavbar tabs={tabs} selected={activeTab} onSelect={setActiveTab} />
			</Styled.Tabs>
			<Styled.Top>
				<Styled.Title>Livros favoritos</Styled.Title>
				<Button variant='text' text='ver todos' />
			</Styled.Top>
			{activeTab === 'MyBooks' && (
				<CardList columns={6}>
					{list.map((item) => (
						<BookCard />
					))}
				</CardList>
			)}
			{activeTab === 'Borrowed' && <>Emprestados...</>}
		</Styled.Container>
	);
};
