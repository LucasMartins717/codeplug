import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Container from "./components/Container";

const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default AppRoutes;