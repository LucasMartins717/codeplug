import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`
const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
`

const Cabecalho: FC = () => {
    return (
        <HeaderContainer>
            <Link to={'/'}>LOGO</Link>

            <DivContainer>
                <h1>Tit<strong>ulo</strong></h1>
                <p>Alguma frase que combine legal.</p>
            </DivContainer>

            <button>IconeDeixarEscuro</button>
        </HeaderContainer>
    )
}

export default Cabecalho;