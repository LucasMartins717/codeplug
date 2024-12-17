import axios from "axios";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

interface interfaceContexto {
    posts: { id: number, title: string, description: string, image_url: string, created_at: string, tags: string[] }[];
    setPosts: (posts: { id: number, title: string, description: string, image_url: string, created_at: string, tags: string[] }[]) => void;
    tags: { name: string }[];
    setTags: (tags: { name: string }[]) => void;
}

export const Contexto = createContext<interfaceContexto | null>(null)
Contexto.displayName = "PostsContexto"

export const ContextoProvider: FC<{ children: ReactNode }> = ({ children }) => {
    
    const tagsArray = [{ name: "Navagador" }, { name: "VSCode" }, { name: "Themes"}, {name: "WebTools"}]

    const [posts, setPosts] = useState<interfaceContexto['posts']>([]);
    const [tags, setTags] = useState<interfaceContexto['tags']>(tagsArray);


    //PEGAR POSTS
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