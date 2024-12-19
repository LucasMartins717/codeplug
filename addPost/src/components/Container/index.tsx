import { FC, ReactNode } from "react";
import styled from "styled-components";

const SectionPosts = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--cor-background-escuro);
    padding: 1% 1% 0;
    border: 5px solid #15141b;
    border-radius: 0.5em;
`

const Container: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <SectionPosts>
            {children}
        </SectionPosts>
    )
}

export default Container