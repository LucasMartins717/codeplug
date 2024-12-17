import { FC } from "react";
import { GrShare } from "react-icons/gr";
import styled from "styled-components";

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
    
    img{
        min-width: 37em;
        max-width: 37em;
        min-height: 21em;
        max-height: 21em;
        background-size: contain;
        filter: drop-shadow(0em 0em 0.2em);
    }
`
const InfosDiv = styled.div`
    display: flex;
    justify-content: space-between;

    h4{
        font-size: 1.7em;
    }

    .infoIcon{
        margin-top: 0.2em;
    }

`


const Post: FC<{title: string, image: string }> = ({title, image}) => {
    return (
        <ContainerDiv>
            <img src={image} alt="foto1" />
            <InfosDiv>
                <h4>{title}</h4>
                <GrShare size={18} className="infoIcon"/>
            </InfosDiv>
        </ContainerDiv>
    )
}

export default Post;