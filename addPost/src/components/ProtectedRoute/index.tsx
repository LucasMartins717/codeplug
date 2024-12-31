import { FC, ReactNode } from "react";
import { usePostContext } from "../../context/contexto";
import { Navigate } from "react-router-dom";

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {

    const { isLogged } = usePostContext();

    return isLogged ? <>{children}</> : <Navigate to="/" />;
}

export default ProtectedRoute;