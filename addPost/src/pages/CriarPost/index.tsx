import { FC, useState } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import { FaFileAlt } from "react-icons/fa";
import { usePostContext } from "../../context/contexto";
import axios from "axios";

const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const SectionPainel = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 40em;
    height: 35.7em;
    padding: 0.6em 1em;
    background-color: greenyellow;
    border-radius: 0.4em;

    label{
        font-size: 2em;
        font-weight: bold;
    }

    input{
        width: 100%;
        border: 1px solid black;
        border-radius: 0.3em;
        font-size: 1.5em;
        margin-bottom: 0.5em;
        padding-left: 0.2em;
    }
`
const DivTitulo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const DivDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const DivImage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 3em;
`
const DivImageDisplay = styled.div`
    display: flex;
    justify-content: space-between;
    
    button{
        width: 2.2em;
        height: 2.2em;
        border: 1px solid black;
        border-radius: 0.4em;
    }

    .fileIconButton{
        margin-top: 0.2em;
    }

    input[type="file"]{
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    input[type="text"]{
        width: 94%;
    }
`
const DivTags = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const DivTagsButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.6em;
    width: 80%;

    button{
        border: 1px solid black;
        border-radius: 0.4em;
        padding: 0.4em 0.7em;
        background: linear-gradient(135deg, #00ff15, #44792c);
        cursor: pointer;
    }
`
const DivSubmit = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1em;

    button{
        width: 100%;
        font-size: 1.2em;
        padding: 0.5em 0em;
        background: linear-gradient(135deg, #c9b65c, #000000);
        border: 1px solid black;
        border-radius: 0.2em;
    }
`
const StyledQuill = styled(ReactQuill)`
    margin-top: 0.4em;
    max-width: 100%;
    max-height: 20em;
    height: 10em;
    background-color: #ffffff;
    .ql-container {
        background-color: #ffffff; /* Cor do fundo do Quill */
    }
    .ql-editor {
        padding: 0.2em 0.5em 0.5em; /* Garante que o texto tenha padding adequado */
    }
`

const CriarPost: FC = () => {

    const { tags } = usePostContext();
    const [inputTitle, setInputTitle] = useState<string>('');
    const [inputDescription, setInputDescription] = useState<string>(''); //fix this
    const [inputImage, setInputImage] = useState<string>('');
    const [inputTag, setInputTag] = useState<string[]>([]);

    const submitPost = () => {
        const postData = async () => {
            await axios.post('http://localhost:3030/posts', {
                title: inputTitle,
                description: inputDescription,
                inputImage,
                inputTag,
            }, { headers: { 'Content-Type': 'application/json' } })
                .then(response => console.log("response sucess: " + response.data))
                .catch(error => console.error("response error: " + error));
        }
        postData();
    }

    return (
        <MainContainer>
            <SectionPainel>
                <DivTitulo>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
                </DivTitulo>

                <DivDescription>
                    <label htmlFor="description">Description</label>
                    <StyledQuill value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />
                </DivDescription>

                <DivImage>
                    <label>Image</label>
                    <DivImageDisplay>
                        <input type="text" name="image_url" placeholder="image-url" />
                        <button title="Selecionar imagem...">
                            <FaFileAlt size={20} className="fileIconButton" />
                            <input type="file" name="image_file" />
                        </button>
                    </DivImageDisplay>
                </DivImage>

                <DivTags>
                    <label>Tags</label>
                    <DivTagsButtons>
                        {tags.map((tag) => (
                            <button>{tag.name}</button>
                        ))}
                    </DivTagsButtons>
                </DivTags>

                <DivSubmit>
                    <button onClick={() => submitPost()}>Create Post</button>
                </DivSubmit>
            </SectionPainel>
        </MainContainer>
    )
}

export default CriarPost;