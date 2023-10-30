import { FC, useState } from 'react';
import * as Styled from './Home.styled';
import { MyBooks, TabBar, Tabs } from '../../components';

const tabs: Array<Tabs> = [
	{ id: 'MyBooks', title: 'Meus livros' },
	{ id: 'Borrowed', title: 'Emprestados' },
];

export const Home: FC = () => {
	const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

	return (
		<Styled.Container>
			<Styled.TabBar>
				<TabBar tabs={tabs} selected={activeTab} onSelect={setActiveTab} />
			</Styled.TabBar>

			<Styled.Tab>
				{activeTab === 'MyBooks' && <MyBooks />}
				{activeTab === 'Borrowed' && <></>}
			</Styled.Tab>
		</Styled.Container>
	);
};
