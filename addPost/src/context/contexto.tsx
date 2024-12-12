import axios from "axios";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

interface interfaceContexto {
    posts: { id: number, title: string, description: string, image_url: string, created_at: string, tags: string[] }[];
    setPosts: (posts: { id: number, title: string, description: string, image_url: string, created_at: string, tags: string[] }[]) => void;
}

export const Contexto = createContext<interfaceContexto | null>(null)
Contexto.displayName = "PostsContexto"

export const ContextoProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [posts, setPosts] = useState<interfaceContexto['posts']>([]);


    //PEGAR POSTS
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3030/posts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response) {
                    throw new Error('Erro no GET buscando posts.')
                }

                setPosts(response.data);

            } catch (err) {
                console.error('Erro ao buscar dados do posts: ' + err);
            }
        }
        fetchPosts();
    }, [])

    return (
        <Contexto.Provider value={{
            posts,
            setPosts
        }}>
            {children}
        </Contexto.Provider>
    )
}

export const usePostContext = () => {
    const contexto = useContext(Contexto);
    try {
        if (contexto) {
            return contexto
        }
    } catch (err) {
        console.error('Context error: ' + err);
    }
}