import { FC } from 'react';
import * as Styled from './Home.styled';
import { MyBooks } from '../../components';
import { FaveWriters } from '../../components/FaveWriters';
import { Library } from '../../components/Library';

export const Home: FC = () => {
	return (
		<Styled.Container>
			<Styled.TopSection>
				<MyBooks />
			</Styled.TopSection>
			<Styled.BottomSection>
				<Styled.Content>
					<FaveWriters />
					<Library />
				</Styled.Content>
			</Styled.BottomSection>
		</Styled.Container>
	);
};
