import { FC } from "react";
import { IoMoon } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../global.css";
import { usePostContext } from "../../context/contexto";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    img{
        width: 5em;
        transition: all 0.2s ease-in;
    }

    img:hover{
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
const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4em;
    user-select: none;

    p{
        font-size: 1.3em;
    }
`
const DivContainerTitulo = styled.div`
    display: flex;

    h1{
        font-family: var(--font-title);
        font-size: 4em;
    }

    h1:last-child{
        color: var(--color-title-green);
    }
`

const Cabecalho: FC = () => {

    const changeTheme = () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');

        if(currentTheme === 'dark'){
            root.removeAttribute('data-theme');
        }else{
            root.setAttribute('data-theme', 'dark')
        }
    }

    return (
        <HeaderContainer>
            <Link to={'/'}><img src="/images/logo.png" alt="CodePlug logo" /></Link>

            <DivContainer>
                <DivContainerTitulo>
                    <h1>Code</h1><h1>Plug</h1>
                </DivContainerTitulo>
                <p>Alguma frase que combine legal.</p>
            </DivContainer>

            <button onClick={() => changeTheme()}><IoMoon size={30} color={"var(--icon-color)"} /></button>
        </HeaderContainer>
    )
}

export default Cabecalho;