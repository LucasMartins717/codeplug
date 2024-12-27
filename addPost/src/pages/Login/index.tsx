import { FC } from "react"
import styled from "styled-components"

const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: var(--cor-background-claro);
`
const PainelContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30em;
    height: 15em;
    background-color: var(--cor-background-escuro);
    border: 1px solid black;
    border-radius: 1em;
    padding: 1em;
    
    label{
        font-size: 2em;
    }

    input{
        font-size: 1.5em;
        background-color: #e9e9e9;
        border-radius: 0.3em;
        border: 1px solid black;
        padding-left: 0.2em;
    }

    button{
        margin-top: 1em;
        font-size: 1.7em;
        border-radius: 0.3em;
        border: 1px solid black;
        background-color: var(--cor-background-claro);
        font-size: 1.3em;
        height: 1.8em;
    }
`

const Login: FC = () => {
    return (
        <MainContainer>
            <PainelContainer>
                <label htmlFor="user">User</label>
                <input type="text" name="user" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <button>Login</button>
            </PainelContainer>
        </MainContainer>
    )
}

export default Login