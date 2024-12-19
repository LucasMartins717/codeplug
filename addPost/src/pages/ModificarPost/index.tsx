import { FC } from "react";
import styled from "styled-components";
import Post from "../../components/Post";
import { FaEdit } from "react-icons/fa";
import { usePostContext } from "../../context/contexto";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";

const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 7%;

    h1{
        font-size: 2.5em;
        color: var(--cor-fonte-clara);
        margin-bottom: 0.4em;
    }
`
const DivPost = styled.div`
    margin-bottom: 1em;
`

const ModificarPost: FC = () => {

    const { posts } = usePostContext();
    const navigate = useNavigate();

    const handleEditPost = (postId: number) => {
        navigate(`/modificarPost/${postId}`)
    }

    return (
        <MainContainer>
            <Container>
                <h1>Escolha um post pra modificar!</h1>

                {posts.map((post) => (
                    <DivPost key={post.id}>
                        <Post id={post.id} title={post.title} image={post.image_url} handleClick={() => handleEditPost(post.id)} icon={<FaEdit size={49} />} />
                    </DivPost>
                ))}
            </Container>
        </MainContainer>
    )
}

export default ModificarPost;