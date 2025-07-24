import { FC, useMemo, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import styled from "styled-components";
import Post from "../../components/Post";
import samplePosts from "../../posts.json";

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
        color: var(--font-active-color);
    }

    h2:hover{
        color: var(--font-hover-color);
    }

    @media (max-width: 570px){
        h2{
            font-size: 4vw;
        }
    }

    @media (max-width: 500px){
        h2{
            font-size: 3.6vw;
        }
    }

    @media (max-width: 387px){
        h2{
            font-size: 3.3vw;
        }
    }

    @media (max-width: 360px){
        h2{
            font-size: 3.1vw;
        }
    }

    @media (max-width: 360px){
        h2{
            font-size: 3.7vw;
        }
    }
`
const PostsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2em;

    @media (max-width: 570px){
        justify-content: center;
    }
`

const Inicio: FC = () => {

    const filterOptions = ['All', 'Extensions', 'Themes', 'VSCode', 'WebTools'];
    const [filtroAtivo, setFiltroAtivo] = useState<string>('All');

    const handleActiveFilter = (e: string) => {
        setFiltroAtivo(e);
    }

    const filteredPosts = useMemo(() => {
        if (filtroAtivo === 'All') {
            return samplePosts;
        }
        return samplePosts.filter(post => post.tags.includes(filtroAtivo));
    }, [filtroAtivo]);

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
                    {filteredPosts.map(post => (
                        <Post
                            key={post.id}
                            title={post.title}
                            image={post.image_url}
                            link={`/post/${post.id}`}
                        />
                    ))}
                </PostsDiv>
            </PostsSection>
        </>
    )
}

export default Inicio;