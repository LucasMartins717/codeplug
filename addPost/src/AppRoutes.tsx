import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import CriarPost from "./pages/CriarPost";
import DeletarPost from "./pages/DeletarPost";
import CopiarPost from "./pages/CopiarPost";
import ModificarPost from "./pages/ModificarPost";

const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/criarPost" element={<CriarPost />} />
                <Route path="/deletarPost" element={<DeletarPost />} />
                <Route path="/modificarPost" element={<ModificarPost />} />
                <Route path="/copiarPost" element={<CopiarPost />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;