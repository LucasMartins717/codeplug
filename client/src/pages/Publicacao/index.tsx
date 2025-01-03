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
                </DivPost>
            </SectionPost>
        </>
    )
}

export default Publication;