import { FC } from 'react';
import * as Styled from './MyBooks.styled';

import { FaveBooks } from '../FaveBooks';
import { MainSection } from '../../molecules';
import { FaveAuthors } from '../FaveAuthors';
import { Library } from '../Library';

export const MyBooks: FC = () => {
	return (
		<Styled.Container>
			<Styled.Top>
				<Styled.Content>
					<FaveBooks />
				</Styled.Content>
			</Styled.Top>

			<MainSection>
				<Styled.Content>
					<FaveAuthors />
					<Library />
				</Styled.Content>
			</MainSection>
		</Styled.Container>
	);
};
