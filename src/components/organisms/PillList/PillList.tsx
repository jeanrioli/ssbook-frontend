import { FC, ReactNode, Children } from 'react';
import * as Styled from './PillList.styled';

interface PillListProps {
	children: ReactNode;
}

export const PillList: FC<PillListProps> = ({ children }) => {
	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.List>
					{Children.map(children, (child, i) => (
						<Styled.Item key={i}>{child}</Styled.Item>
					))}
				</Styled.List>
			</Styled.Content>
		</Styled.Container>
	);
};
