import { FC, ReactNode } from "react";
import styled from "styled-components";

const MainContainer = styled.main`
    padding: 1.2em 2em;
`

const Container: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    )
}

export default Container;