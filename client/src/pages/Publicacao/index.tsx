import { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DOMPurify from "dompurify"
import CabecalhoSecundario from "../../components/CabecalhoSecundario";
import posts from "../../posts.json";


const SectionPost = styled.section`
    padding: 0 24vw;

    @media (max-width: 1500px){
        padding: 0 20vw;
    }

    @media (max-width: 1150px){
        padding: 0 15vw;
    }

    @media (max-width: 790px){
        padding: 0 11vw;
    }

    @media (max-width: 725px){
        margin-top: 1em;
        padding: 0 6vw;
    }

    @media (max-width: 570px){
        padding: 0 3vw;
    }

    @media (max-width: 450px){
        padding: 0;
    }



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


    @media (max-width: 725px){
        img{
            height: 17em;
        }
    }

    @media (max-width: 570px){
        img{
            height: 14em;
        }

        h1{
            font-size: 1.6em;
        }
    }

    @media (max-width: 450px){
        img{
            height: 12em;
        }

        h1{
            font-size: 1.3em;
        }
    }

`
const DivPostDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    
    ul{
        list-style: none;
    }
`
const DivButtonDownload = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.6em;

    button{
        width: 48%;
        padding: 0.2em 0;
        border: 1px solid black;
        border-radius: 0.2em;
        background: linear-gradient(130deg, var(--post-button-first-linear-color), var(--post-button-second-linear-color));
        font-size: 1.4em; 
        cursor: pointer;  

        a{
            color: var(--post-button-title-color);
            text-decoration: none;
        }
    }

    @media(max-width: 370px){
        flex-direction: column;
        gap: 0.5em;

        button{
            width: 100%;
        }
    }
`


const Publication: FC = () => {

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
                        <button><a>Download</a></button>
                        <button><a>Source Code</a></button>
                    </DivButtonDownload>
                </DivPost>
            </SectionPost>
        </>
    )
}

export default Publication;