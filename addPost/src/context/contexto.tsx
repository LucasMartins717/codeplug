import axios from "axios";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

interface interfaceContexto {
    posts: { id: number, title: string, description: string, image_url: string, created_at: string, tags: string[], download_link: string, source_link: string }[];
    setPosts: (posts: { id: number, title: string, description: string, image_url: string, created_at: string, tags: string[], download_link: string, source_link: string }[]) => void;
    tags: { name: string }[];
    setTags: (tags: { name: string }[]) => void;
    token: string | null;
    setToken: (token: string | null) => void;
    isLogged: boolean
}

export const Contexto = createContext<interfaceContexto | null>(null)
Contexto.displayName = "PostsContexto"

export const ContextoProvider: FC<{ children: ReactNode }> = ({ children }) => {
    
    const tagsArray = [{ name: "Extensions" }, { name: "Themes"}, { name: "VSCode" }, {name: "WebTools"}]

    const [posts, setPosts] = useState<interfaceContexto['posts']>([]);
    const [tags, setTags] = useState<interfaceContexto['tags']>(tagsArray);
    const [token, setToken] = useState<interfaceContexto['token']>(localStorage.getItem('token'));
    const isLogged: boolean = Boolean(token);


    //GUARDA OS POSTS EM /posts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3030/posts');

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
            setPosts,
            tags,
            setTags,
            token,
            setToken,
            isLogged,
        }}>
            {children}
        </Contexto.Provider>
    )
}

export const usePostContext = () => {
    const contexto = useContext(Contexto);
    if(!contexto){
        throw new Error('Context error!')
    }
    return contexto;
}