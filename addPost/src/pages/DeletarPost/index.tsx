import { FC } from "react";
import styled from "styled-components";
import Post from "../../components/Post";
import { FaRegTrashAlt } from "react-icons/fa";
import { usePostContext } from "../../context/contexto";
import axios from "axios";
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

const DeletarPost: FC = () => {

    const { posts, setPosts } = usePostContext();

    const handleDeletePost = async (id: number) => {
        const confirmDelete = window.confirm("are you sure to delete this post?")

        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3030/posts/${id}`);
                setPosts(posts.filter((post) => post.id !== id))
            } catch (err) {
                console.error('Erro ao deletar post: ' + err)
            }
        }
    }

    return (
        <MainContainer>
            <Container>
                <h1>Escolha algum post para deletar</h1>

                {posts.map((post) => (
                    <DivPost key={post.id}>
                        <Post id={post.id} title={post.title} image={post.image_url} handleClick={handleDeletePost} icon={<FaRegTrashAlt size={49} />} />
                    </DivPost>
                ))}
            </Container>
        </MainContainer>
    )
}

export default DeletarPost;