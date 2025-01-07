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