import { FC } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../../context/contexto";
import styled from "styled-components";
import DOMPurify from "dompurify"

const SectionPost = styled.section`
    display: flex;
`
const DivPostImages = styled.div`
    display: flex;
    flex-direction: column;
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
                <img src={currentPost?.image_url} alt={'Foto post ' + currentPost?.title} />
                <img src={currentPost?.image_url} alt={'Gif post ' + currentPost?.title} />
            </DivPostImages>

            <DivPostDescription>
                <h1>{currentPost?.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(currentPost?.description || "") }}></div>
            </DivPostDescription>
        </SectionPost>
    )
}

export default Publication;