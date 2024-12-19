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
        min-width: 37em;
        max-width: 37em;
        min-height: 21em;
        max-height: 21em;
        background-size: contain;
        filter: drop-shadow(0em 0em 0.2em #000000);
    }
`
const ImageDiv = styled.div`
    position: relative;

    .imageIconHover{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
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