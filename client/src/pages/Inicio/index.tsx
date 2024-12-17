import { FC } from "react";
import Cabecalho from "../../components/Cabecalho";
import styled from "styled-components";
import Post from "../../components/Post";
import { usePostContext } from "../../context/contexto";

const PostsSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 2em;
`
const FilterDiv = styled.div`
    display: flex;
    gap: 1em;

    h2{
        font-weight: bold;
    }

    h2:first-child{
        color: var(--color-green);
    }
`
const PostsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2em;
`

const Inicio: FC = () => {

    const { posts } = usePostContext();

    return (
        <>
            <Cabecalho />
            <PostsSection>
                <FilterDiv>
                    <h2>All</h2>
                    <h2>Extension</h2>
                    <h2>Themes</h2>
                    <h2>VSCode</h2>
                    <h2>WebTools</h2>
                </FilterDiv>
                <PostsDiv>
                    {posts.map((post) => (
                        <Post key={post.id} image={post.image_url} title={post.title}/>
                    ))}
                </PostsDiv>
            </PostsSection>
        </>
    )
}

export default Inicio;