import axios from "axios";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { data } from "react-router-dom";

interface interfaceContexto {
    posts: { id: number, title: string, description: string, image_url: string, created_at: string, tags: string[] }[];
    setPosts: (posts: { id: number, title: string, description: string, image_url: string, created_at: string, tags: string[] }[]) => void;
}

export const Contexto = createContext<interfaceContexto | null>(null);
Contexto.displayName = "Posts-Context";

export const ContextoProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [posts, setPosts] = useState<interfaceContexto['posts']>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3030/posts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                if (!response) {
                    throw new Error('Erro ao conectar com o servidor!')
                }
                setPosts(response.data);
                console.log(data);
            } catch (err) {
                console.error("Erro ao buscar dados no servidor: " + err);
            }
        }
        fetchPosts();
    }, [])

    return (
        <Contexto.Provider value={{
            posts,
            setPosts,
        }}>
            {children}
        </Contexto.Provider>
    )
}

export const usePostContext = () => {
    const contexto = useContext(Contexto);
    if (!contexto) {
        throw new Error("Erro no contexto!")
    }
    return contexto;
}