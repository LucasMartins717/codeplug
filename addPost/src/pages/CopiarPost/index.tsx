import { FC } from "react";
import styled from "styled-components";
import Post from "../../components/Post";
import { FaCopy } from "react-icons/fa";
import { usePostContext } from "../../context/contexto";
import Container from "../../components/Container";

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
const DivPost = styled.div`
    margin-bottom: 1em;
`

const CopiarPost: FC = () => {

    const { posts } = usePostContext();

    const handleCopyPost = async (id: number) => {
        try {
            const postCopy = posts.find(post => post.id === id);

            if (postCopy) {

                const formatedText = `
                id: ${postCopy.id}\n\
                title: ${postCopy.title}\n\
                description: ${postCopy.description}\n\
                tags: ${postCopy.tags}\n\
                download-link: ${postCopy.download_link}\n\
                source-link: ${postCopy.source_link}\n\
                `

                await navigator.clipboard.writeText(formatedText);
                alert('Post copiado!');
            }
        } catch (err) {
            console.error("Erro ao copiar post: " + err);
        }
    }

    return (
        <MainContainer>
        <Container>
                <h1>Escolha um post pra copiar!</h1>

                {posts.map((post) => (
                    <DivPost key={post.id}>
                        <Post id={post.id} title={post.title} image={post.image_url} handleClick={handleCopyPost} icon={<FaCopy size={49} />} />
                    </DivPost>
                ))}
                </Container>
        </MainContainer>
    )
}

export default CopiarPost;