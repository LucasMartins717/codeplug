import { FC, ReactNode } from "react";
import { GrShare } from "react-icons/gr";
import styled from "styled-components";

interface interfacePosts {
    id: number,
    title: string,
    image: string,
    icon: ReactNode,
    handleClick: (postId: number) => void;
}

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
    color: white;

    img{
        min-width: 37vw;
        max-width: 37vw;
        min-height: 21vw;
        max-height: 21vw;
        background-size: contain;
        filter: drop-shadow(0em 0em 0.2em #000000);
    }

    @media (max-width: 1220px){
        img{
            min-width: 72vw;
            max-width: 72vw;
            min-height: 36vw;
            max-height: 36vw;
        }
    }

    @media (max-width: 450px){
        img{
            min-width: 85vw;
            max-width: 85vw;
            min-height: 40vw;
            max-height: 40vw;
        }
    }

`
const ImageDiv = styled.div`
    position: relative;
    cursor: pointer;

    .imageIconHover{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }

    img{
        transition: all 0.4s ease-in-out;
    }

    &:hover img{
        opacity: 70%;
    }

    &:hover .imageIconHover{
        display: block;
    }
`
const InfosDiv = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--cor-background-claro);

    h4{
        font-size: 1.7em;
    }

    .infoIcon{
        margin-top: 0.2em;
    }

    @media (max-width: 600px){
        h4{
            font-size: 1.3em;
        }
    }

    @media (max-width: 370px){
        h4{
            font-size: 1.1em;
        }
    }

`


const Post: FC<interfacePosts> = ({ id, title, image, icon, handleClick }) => {
    return (
        <ContainerDiv key={id}>
            <ImageDiv>
                <img onClick={() => handleClick(id)} src={image} alt={`photo-post-${id}`} />
                <div className="imageIconHover" onClick={() => handleClick(id)}>
                    {icon}
                </div>
            </ImageDiv>
            <InfosDiv>
                <h4>{title}</h4>
                <GrShare size={18} className="infoIcon" />
            </InfosDiv>
        </ContainerDiv>
    )
}

export default Post;