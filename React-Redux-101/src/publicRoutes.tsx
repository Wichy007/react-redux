import { Navigate } from "react-router-dom";
import LoginWithConnected from "./components/Login";

export default function publicRoutes() {
    return [
        {
            path: "/login",
            element: <LoginWithConnected/>
        },
        {
            path: "*",
            element: <Navigate to="/login" replace />
        }
    ]
}

