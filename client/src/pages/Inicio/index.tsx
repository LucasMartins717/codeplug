import { FC, useState } from "react";
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
        cursor: pointer;
        user-select: none;
        transition: all 0.1s ease-in;
    }

    .activedTag{
        color: var(--color-green);
    }

    h2:hover{
        color: #277c18;
    }
`
const PostsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2em;
`

const Inicio: FC = () => {

    const filterOptions = ['All', 'Extensions', 'Themes', 'VSCode', 'WebTools'];
    const { posts } = usePostContext();
    const [filtroAtivo, setFiltroAtivo] = useState<string>('All');

    const handleActiveFilter = (e: string) => {
        setFiltroAtivo(e);
    }

    return (
        <>
            <Cabecalho />
            <PostsSection>
                <FilterDiv>
                    {filterOptions.map((tag) => (
                        <h2
                            key={tag}
                            className={filtroAtivo == tag ? "activedTag" : ""}
                            onClick={() => handleActiveFilter(tag)}
                        >{tag}</h2>
                    ))}
                </FilterDiv>
                <PostsDiv>
                    {posts.filter((post) => post.tags.includes(filtroAtivo)).map((post) => (
                        <Post key={post.id} title={post.title} image={post.image_url} />
                    ))}
                </PostsDiv>
            </PostsSection>
        </>
    )
}

export default Inicio;