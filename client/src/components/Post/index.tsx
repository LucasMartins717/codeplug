import { FC } from "react";
import { GrShare } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
    
    .postLink{
        text-decoration: none;
        color: black;
    }

    img{
        min-width: 37em;
        max-width: 37em;
        min-height: 21em;
        max-height: 21em;
        background-size: contain;
        filter: drop-shadow(0em 0em 0.2em);
    }

    @media (max-width: 1280px){
        img{
            min-width: 45vw;
            max-width: 45vw;
            min-height: 26vw;
            max-height: 26vw;
        }
    }

    @media (max-width: 900px){
        img{
            min-width: 44vw;
            max-width: 44vw;
            min-height: 25vw;
            max-height: 25vw;
        }
    }

    @media (max-width: 780px){
        img{
            min-width: 43vw;
            max-width: 43vw;
            min-height: 23vw;
            max-height: 23vw;
        }
    }

    @media (max-width: 570px){
        img{
            min-width: 80vw;
            max-width: 80vw;
            min-height: 37vw;
            max-height: 37vw;
        }
    }
`
const InfosDiv = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--font-color);

    h4{
        font-size: 1.7em;
    }

    .infoIcon{
        margin-top: 0.2em;
    }


    @media (max-width: 900px){
        h4{
            font-size: 1.5em;
        }
    }

    @media (max-width: 780px){
        h4{
            font-size: 1.3em;
        }
    }

    @media (max-width: 350px){
        h4{
            font-size: 1.1em;
        }
    }

`


const Post: FC<{ title: string, image: string, link: string }> = ({ title, image, link }) => {
    return (
        <ContainerDiv>
            <Link to={link} className="postLink">
                <img src={image} alt="foto1" />
                <InfosDiv>
                    <h4>{title}</h4>
                    <GrShare size={18} className="infoIcon" />
                </InfosDiv>
            </Link>
        </ContainerDiv>
    )
}

export default Post;