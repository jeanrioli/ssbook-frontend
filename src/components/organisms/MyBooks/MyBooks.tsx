import { FC, useState } from 'react';
import * as Styled from './MyBooks.styled';

import { HomeNavbar } from '../../molecules/HomeNavbar';
import { CardList } from '../CardList';
import { BookCard } from '../../molecules/BookCard';
import { Button } from '../../atoms/Button';
import { SectionTitle } from '../../atoms/SectionTitle';

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
				<SectionTitle title='Livros favoritos' button={<Button variant='text' text='ver todos' />} />
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
