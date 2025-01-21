import React, { FC, useState } from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import { FaFileAlt } from "react-icons/fa";
import { usePostContext } from "../../context/contexto";
import axios from "axios";
import QuillText from "../../components/QuillText";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: var(--cor-background-claro);

    @media (max-width: 370px){
        margin: 3em 0;
    }

    @media (max-width: 323px){
        margin: 4em 0;
    }
`
const SectionPainel = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 40em;
    height: 44em;
    padding: 0.6em 1em;
    background-color: var(--cor-background-escuro);
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

    @media (max-width: 700px){
        width: 90vw;
    }

    @media (max-width: 450px){
        height: 45.4em;
    }

    @media (max-width: 370px){
        height: 51em;
    }

    @media (max-width: 323px){
        height: 52.4em;
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

    @media (max-width: 450px){
        margin-top: 4.6em;
    }

    @media (max-width: 323px){
        margin-top: 6em;
    }
`
const DivImageDisplay = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        position: relative;
        width: 2.2em;
        height: 2.2em;
        border: 1px solid black;
        border-radius: 0.4em;
    }

    .fileIconButton{
        margin-top: 0.2em;
    }

    input[type="file"]{
        position: absolute;
        left: 0;
        top: 0;
        width: 1.6em;
        height: 1.6em;
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
        background: linear-gradient(135deg, #9796b8, #74738d);
        cursor: pointer;
        transition: all 0.2s ease-in;
    }

    button:hover{
        scale: 1.05;
        transition: all 0.2s ease-in;
    }
    
    .tagSelected{
        background: linear-gradient(135deg, #403c6e, #363468);
        color: var(--cor-background-claro);
        scale: 1.05;
    }

    @media (max-width: 370px){
        flex-direction: column;
        gap: 0.1em;
        width: 100%;

        button:hover{
            scale: 1.02;
        }

        .tagSelected{
            scale: 1.02;
        }
    }
`
const DivDownloadLink = styled.div`
    margin-top: 1em;
    
    label{
        font-size: 1.5em;
    }

    input{
        margin-bottom: 0.1em;
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
        background: linear-gradient(135deg, #9796b8, #73728b);
        border: 1px solid black;
        border-radius: 0.2em;
        cursor: pointer;
    }
`

const CriarPost: FC = () => {

    const { tags, posts, setPosts } = usePostContext();
    const navigate = useNavigate();
    const [inputTitle, setInputTitle] = useState<string>('');
    const [inputDescription, setInputDescription] = useState<string>('');
    const [inputImage, setInputImage] = useState<string>('');
    const [inputFileImage, setInputFileImage] = useState<File | null>(null);
    const [inputTag, setInputTag] = useState<string[]>(['All']);
    const [inputDownload, setInputDownload] = useState<string>('');
    const [inputSource, setInputSource] = useState<string>('');

    const postCheck = (): boolean => {
        if (inputTitle.length < 5 || inputTitle.length > 40) {
            alert("Title must be between 5 and 40 characters");
            return false;
        }

        if (inputDescription.length < 50) {
            alert("Description must have at least 50 characters");
            return false
        }

        if (!inputImage && !inputFileImage) {
            alert("Provide a image URL or upload a file")
            return false
        }

        if (inputTag.length < 2) {
            alert("Select at least one tag");
            return false
        }

        if(!inputDownload){
            alert("Provide a download link!")
        }

        if(!inputSource){
            alert("Provide a source link!")
        }

        return true
    }

    const handleSubmitPost = async () => {

        if (!postCheck()) return;

        const formData = new FormData();
        formData.append('title', inputTitle);
        formData.append('description', inputDescription);
        formData.append('tags', JSON.stringify(inputTag));
        formData.append('downloadLink', inputDownload);
        formData.append('sourceLink', inputSource);

        if (inputFileImage) {
            formData.append('image_url', inputFileImage);
        } else if (inputImage) {
            formData.append('image_url', inputImage);
        }

        const clearForm = () => {
            setInputTitle('');
            setInputDescription('');
            setInputImage('');
            setInputFileImage(null);
            setInputTag(['All']);
            setInputDownload('');
            setInputSource('');
        }

        try {
            const response = await axios.post('http://localhost:3030/posts', formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            )
            setPosts([...posts, response.data]);
            clearForm();
            alert("Post created");
            navigate('/admin');
            window.location.reload();
        } catch (err) {
            console.error("Erro no servidor: " + err);
        }
    }

    const selectedTags = (name: string) => {
        if (inputTag.includes(name)) {
            setInputTag(inputTag.filter((tag) => tag !== name));
        } else {
            setInputTag([...inputTag, name]);
        }
    }

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setInputFileImage(e.target.files[0]);
        }
    }

    return (
        <MainContainer>
            <SectionPainel>
                <DivTitulo>
                    <label>Title</label>
                    <input type="text" name="title" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
                </DivTitulo>

                <DivDescription>
                    <label>Description</label>
                    <QuillText value={inputDescription} setState={setInputDescription} />
                </DivDescription>

                <DivImage>
                    <label>Image</label>
                    <DivImageDisplay>
                        <input type="text" name="image_url" disabled={inputFileImage !== null ? true : false} placeholder="image-url" value={inputImage} onChange={(e) => setInputImage(e.target.value)} />
                        <button title="Selecionar imagem..." style={inputImage.length > 0 ? { backgroundColor: '#a3a3a3' } : { backgroundColor: '#ffffff' }}>
                            <FaFileAlt size={20} className="fileIconButton" />
                            <input type="file" name="image_file" disabled={inputImage.length > 0 ? true : false} onChange={(e) => handleFileSelect(e)} />
                        </button>
                    </DivImageDisplay>
                </DivImage>

                <DivTags>
                    <label>Tags</label>
                    <DivTagsButtons>
                        {tags.map((tag) => (
                            <button
                                key={tag.name}
                                onClick={() => selectedTags(tag.name)}
                                className={inputTag.includes(tag.name) ? 'tagSelected' : ''}
                            >{tag.name}</button>
                        ))}
                    </DivTagsButtons>
                </DivTags>

                <DivDownloadLink>
                    <label>Download Link</label>
                    <input type="text" name="download" value={inputDownload} onChange={(e) => setInputDownload(e.target.value)} />
                    <label>Source Link</label>
                    <input type="text" name="source" value={inputSource} onChange={(e) => setInputSource(e.target.value)} />
                </DivDownloadLink>

                <DivSubmit>
                    <button onClick={() => handleSubmitPost()}>Create Post</button>
                </DivSubmit>
            </SectionPainel>
        </MainContainer>
    )
}

export default CriarPost;