import { FC } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../../context/contexto";
import styled from "styled-components";
import DOMPurify from "dompurify"

const SectionPost = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 30em;
`
const DivPostImages = styled.div`
    display: flex;
    flex-direction: column;

    img{
        height: 22em;
    }

`
const DivPostDescription = styled.div`
    display: flex;
    flex-direction: column;
`


const Publication: FC = () => {

    const { posts } = usePostContext();
    const { postId } = useParams();
    const currentPost = posts.find((post) => post.id === Number(postId))

    return (
        <SectionPost>
            <DivPostImages>
                <h1>{currentPost?.title}</h1>
                <img src={currentPost?.image_url} alt={'Foto post ' + currentPost?.title} />
            </DivPostImages>

            <DivPostDescription>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(currentPost?.description || "") }}></div>
            </DivPostDescription>
        </SectionPost>
    )
}

export default Publication;