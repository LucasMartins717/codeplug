import { FC, ReactNode } from "react";
import styled from "styled-components";

const MainContainer = styled.main`
    padding: 1.2em 2em;

    @media (max-width: 420px){
        padding: 1.2em 5%;
    }

    @media (max-width: 320px){
        padding: 1.2em 3%;
    }
`

const Container: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    )
}

export default Container;