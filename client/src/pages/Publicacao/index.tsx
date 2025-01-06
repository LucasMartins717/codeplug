import { FC } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../../context/contexto";
import styled from "styled-components";
import DOMPurify from "dompurify"
import CabecalhoSecundario from "../../components/CabecalhoSecundario";


const SectionPost = styled.section`
    padding: 0 25%;
    `
const DivPost = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, var(--post-first-linear-color), var(--post-second-linear-color));
    border-radius: 0.5em;
    box-shadow: 0em 0em 10em 1em #000000;
    padding: 1em;
`
const DivPostImages = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        font-size: 2em;
    }

    img{
        height: 22em;
    }

`
const DivPostDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
`
const DivButtonDownload = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.6em;

    button{
        width: 48%;
        font-size: 1.4em;
        padding: 0.2em 0;
        border: 1px solid black;
        border-radius: 0.2em;
        background: linear-gradient(130deg, var(--post-button-first-linear-color), var(--post-button-second-linear-color));
        
        a{
            color: black;
            text-decoration: none;
        }
    }
`


const Publication: FC = () => {

    const { posts } = usePostContext();
    const { postId } = useParams();
    const currentPost = posts.find((post) => post.id === Number(postId))

    return (
        <>
            <CabecalhoSecundario />

            <SectionPost>
                <DivPost>
                    <DivPostImages>
                        <h1>{currentPost?.title}</h1>
                        <img src={currentPost?.image_url} alt={'Foto post ' + currentPost?.title} />
                    </DivPostImages>

                    <DivPostDescription>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(currentPost?.description || "") }}></div>
                    </DivPostDescription>

                    <DivButtonDownload>
                        <button><a href={currentPost?.download_link}>Download</a></button>
                        <button><a href={currentPost?.source_link}>Source Code</a></button>
                    </DivButtonDownload>
                </DivPost>
            </SectionPost>
        </>
    )
}

export default Publication;