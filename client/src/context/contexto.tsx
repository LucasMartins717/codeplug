import axios from "axios";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

interface interfaceContexto {
    posts: { id: number, title: string, description: string, image_url: string, created_at: string, tags: string[], download_link: string, source_link: string }[];
    setPosts: (posts: { id: number, title: string, description: string, image_url: string, created_at: string, tags: string[], download_link: string, source_link: string }[]) => void;
    currentTheme: string | null;
    setCurrentTheme: (currentTheme: string | null) => void;
    changeTheme: () => void;
}

export const Contexto = createContext<interfaceContexto | null>(null);
Contexto.displayName = "Posts-Context";

export const ContextoProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [posts, setPosts] = useState<interfaceContexto['posts']>([]);
    const [currentTheme, setCurrentTheme] = useState<interfaceContexto['currentTheme']>(localStorage.getItem('currentTheme'));

    const changeTheme = () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            root.removeAttribute('data-theme');
            localStorage.setItem('currentTheme', 'light');
        } else {
            root.setAttribute('data-theme', 'dark')
            localStorage.setItem('currentTheme', 'dark');
        }
    }

    useEffect(() => {

        const themeChange = () => {
            const theme = localStorage.getItem('currentTheme')
            if(theme === "dark"){
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        }

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
            } catch (err) {
                console.error("Erro ao buscar dados no servidor: " + err);
            }
        }
        themeChange();
        fetchPosts();
    }, [])

    return (
        <Contexto.Provider value={{
            posts,
            setPosts,
            changeTheme,
            currentTheme,
            setCurrentTheme
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