import { FC } from 'react';
import * as Styled from './Home.styled';
import { MyBooks } from '../../components';
import { FaveAuthors } from '../../components/FaveAuthors';
import { Library } from '../../components/Library';

export const Home: FC = () => {
	return (
		<Styled.Container>
			<Styled.TopSection>
				<Styled.Content>
					<MyBooks />
				</Styled.Content>
			</Styled.TopSection>
			<Styled.BottomSection>
				<Styled.Content>
					<FaveAuthors />
					<Library />
				</Styled.Content>
			</Styled.BottomSection>
		</Styled.Container>
	);
};
