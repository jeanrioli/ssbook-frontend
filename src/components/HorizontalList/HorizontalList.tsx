import { FC, Children, ReactNode } from 'react';
import * as Styled from './HorizontalList.styled';

import { BookCard } from '../BookCard';

interface ListProps {
	columns: number;
	children: ReactNode;
}

export const HorizontalList: FC<ListProps> = ({ columns, children }) => {
	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.List columns={columns}>
					{Children.map(children, (child) => (
						<Styled.Item>{child}</Styled.Item>
					))}
				</Styled.List>
			</Styled.Content>
		</Styled.Container>
	);
};
