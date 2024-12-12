import { FC } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import { FaFileAlt } from "react-icons/fa";

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
    height: 32em;
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
    return (
        <MainContainer>
            <SectionPainel>
                <DivTitulo>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" />
                </DivTitulo>

                <DivDescription>
                    <label htmlFor="description">Description</label>
                    <StyledQuill />
                </DivDescription>

                <DivImage>
                    <label>Image</label>
                    <DivImageDisplay>
                        <input type="text" name="image_url" placeholder="image-url"/>
                        <button title="Selecionar imagem...">
                            <FaFileAlt size={20} className="fileIconButton"/>
                            <input type="file" name="image_file" />
                        </button>
                    </DivImageDisplay>
                </DivImage>

                <DivTags>
                    <label>Tags</label>
                </DivTags>
            </SectionPainel>
        </MainContainer>
    )
}

export default CriarPost;