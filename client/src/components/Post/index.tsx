import { FC } from "react";
import { GrShare } from "react-icons/gr";
import styled from "styled-components";

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;

    img{
        max-width: 37em;
        width: 100%;
        background-size: contain;
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


const Post: FC = () => {
    return (
        <ContainerDiv>
            <img src="/images/foto1.png" alt="foto1" />
            <InfosDiv>
                <h4>Title</h4>
                <GrShare size={18} className="infoIcon"/>
            </InfosDiv>
        </ContainerDiv>
    )
}

export default Post;