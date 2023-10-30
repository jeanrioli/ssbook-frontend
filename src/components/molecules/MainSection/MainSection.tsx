import { FC, ReactNode } from 'react';
import * as Styled from './MainSection.styled';

interface MainSectionProps {
	children: ReactNode;
}

export const MainSection: FC<MainSectionProps> = ({ children }) => {
	return <Styled.Container>{children}</Styled.Container>;
};
