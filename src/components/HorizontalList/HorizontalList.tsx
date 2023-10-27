import { FC, Children, ReactNode } from 'react';
import * as Styled from './HorizontalList.styled';

import { BookCard } from '../BookCard';

interface ListProps {
	children: ReactNode;
	gap?: number;
}

export const HorizontalList: FC<ListProps> = ({ gap = 20, children }) => {
	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.List gap={gap}>
					{Children.map(children, (child) => (
						<Styled.Item>{child}</Styled.Item>
					))}
				</Styled.List>
			</Styled.Content>
		</Styled.Container>
	);
};
