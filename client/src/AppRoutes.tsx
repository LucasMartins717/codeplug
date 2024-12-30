import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Container from "./components/Container";
import { ContextoProvider } from "./context/contexto";
import Publication from "./pages/Publication";

const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <ContextoProvider>
                <Container>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/post/:postId" element={<Publication />} />
                    </Routes>
                </Container>
            </ContextoProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;