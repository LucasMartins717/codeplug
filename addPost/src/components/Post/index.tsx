import { FC, ReactNode } from "react";
import { GrShare } from "react-icons/gr";
import styled from "styled-components";

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
    color: white;

    img{
        max-width: 37em;
        width: 100%;
        background-size: contain;
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


const Post: FC<{ icon: ReactNode }> = ({ icon }) => {
    return (
        <ContainerDiv>
            <ImageDiv>
                <img src="/images/foto1.png" alt="foto1" />
                <div className="imageIconHover">
                    {icon}
                </div>
            </ImageDiv>
            <InfosDiv>
                <h4>Title</h4>
                <GrShare size={18} className="infoIcon" />
            </InfosDiv>
        </ContainerDiv>
    )
}

export default Post;