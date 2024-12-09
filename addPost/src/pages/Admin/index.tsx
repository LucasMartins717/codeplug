import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const OpcoesContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    ul{
        list-style: none;
        font-size: 2em;
        text-align: center;
        user-select: none;
    }

    li{
        background-color: aliceblue;
        padding: 0.5em 3em;
        margin-bottom: 1em;
        border: 1px solid black;
        border-radius: 0.3em;
        cursor: pointer;
    }

    .linkPosts{
        color: black;
        text-decoration: none;
        font-weight: bold;
    }
`

const Admin: FC = () => {
    return(
        <MainContainer>
            <OpcoesContainer>
                <ul>
                    <li><Link to={"/criarPost"} className="linkPosts">Criar Post</Link></li>
                    <li><Link to={"/deletarPost"} className="linkPosts">Deletar Post</Link></li>
                    <li><Link to={"/modificarPost"} className="linkPosts">Modificar Post</Link></li>
                    <li><Link to={"/copiarPost"} className="linkPosts">Copiar Post</Link></li>
                </ul>
            </OpcoesContainer>
        </MainContainer>
    )
}

export default Admin;