import axios from "axios"
import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { usePostContext } from "../../context/contexto"

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
    
    form{
        display: flex;
        flex-direction: column;
    }

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

    const { setToken, isLogged } = usePostContext();
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3030/login', {
                username: inputUsername,
                password: inputPassword
            });

            if(response.data.token){
                localStorage.setItem('token', response.data.token)
                setToken(response.data.token);
                navigate('/admin');
            }

        } catch (err) {
            alert('Username or Password incorrect!');
        }
    }

    useEffect(() => {
        if (isLogged) {
            navigate('/admin');
        }
    }, [isLogged, navigate]);

    return (
        <MainContainer>
            <PainelContainer>
                <form onSubmit={handleLogin}>
                    <label htmlFor="user">User</label>
                    <input type="text" name="user" id="user" value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                </form>
            </PainelContainer>
        </MainContainer>
    )
}

export default Login