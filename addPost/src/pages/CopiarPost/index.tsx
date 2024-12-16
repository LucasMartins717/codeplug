import { FC } from "react";
import styled from "styled-components";
import Post from "../../components/Post";
import { FaCopy } from "react-icons/fa";

const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 7%;

    h1{
        font-size: 2.5em;
        color: var(--cor-background-claro);
        margin-bottom: 0.4em;
    }
`
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
const DivPost = styled.div`
    margin-bottom: 1em;
`

const CopiarPost: FC = () => {
    return (
        <MainContainer>
            <SectionPosts>
                <h1>Escolha um post pra copiar!</h1>
                <DivPost>
                    <Post icon={<FaCopy size={49} />} />
                </DivPost>
                <DivPost>
                    <Post icon={<FaCopy size={49} />} />
                </DivPost>
                <DivPost>
                    <Post icon={<FaCopy size={49} />} />
                </DivPost>
                <DivPost>
                    <Post icon={<FaCopy size={49} />} />
                </DivPost>
            </SectionPosts>
        </MainContainer>
    )
}

export default CopiarPost;