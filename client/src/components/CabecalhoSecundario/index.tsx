import { FC } from "react";
import { IoMoon } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { usePostContext } from "../../context/contexto";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    img{
        width: 5em;
        animation: pulse 0.7s infinite;
        transition: all 0.2s ease-in;
    }

    @keyframes pulse {
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.08);
        }
        100%{
            transform: scale(1);
        }
    }

    img:hover{
        animation: none;
        scale: 1.1;
    }

    button{
        width: 3em;
        height: 3em;
        border: none;
        border-radius: 100em;
        background: none;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    button:hover{
        scale: 1.2;
    }

    @media (max-width: 820px){
        img{
            width: 4em;
        }

        button{
            margin-top: 2%;
        }
    }

    @media (max-width: 725px){
        img{
            width: 3.5em,;
        }

        button{
            margin-top: 2.3%;
        }
    }

    @media (max-width: 400px){
        button{
            margin-top: 2.8%;
        }
    }

    @media (max-width: 350px){
        img{
            width: 3.4em;
        }
    }
`

const CabecalhoSecundario: FC = () => {

    const { changeTheme } = usePostContext();

    return (
        <HeaderContainer>
            <Link to={'/'}><img src="/images/logo.png" alt="CodePlug logo" /></Link>
            <button onClick={() => changeTheme()}><IoMoon size={30} color={"var(--icon-color)"} /></button>
        </HeaderContainer>
    )
}

export default CabecalhoSecundario;