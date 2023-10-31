import { FC, useState } from 'react';
import * as Styled from './Home.styled';
import { MyBooks, TabBar, Tabs } from '../../components';
import { Helmet } from 'react-helmet';

const tabs: Array<Tabs> = [
	{ id: 'MyBooks', title: 'Meus livros' },
	{ id: 'Borrowed', title: 'Emprestados' },
];

export const Home: FC = () => {
	const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

	return (
		<Styled.Container>
			<Helmet>
				<title>Início | SSBook</title>
			</Helmet>

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
