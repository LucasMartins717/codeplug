import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import CriarPost from "./pages/CriarPost";
import DeletarPost from "./pages/DeletarPost";
import CopiarPost from "./pages/CopiarPost";
import ModificarPost from "./pages/ModificarPost";
import { ContextoProvider } from "./context/contexto";
import ModificarPostPage from "./pages/ModificarPostPage";
import ProtectedRoute from "./components/ProtectedRoute";

const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <ContextoProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
                    <Route path="/criarPost" element={<ProtectedRoute><CriarPost /></ProtectedRoute>} />
                    <Route path="/deletarPost" element={<ProtectedRoute><DeletarPost /></ProtectedRoute>} />
                    <Route path="/modificarPost" element={<ProtectedRoute><ModificarPost /></ProtectedRoute>} />
                    <Route path="/modificarPost/:id" element={<ProtectedRoute><ModificarPostPage /></ProtectedRoute>} />
                    <Route path="/copiarPost" element={<ProtectedRoute><CopiarPost /></ProtectedRoute>} />
                </Routes>
            </ContextoProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;