import { Navigate } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import NavBarWithConnect from "./components/NavBar"

export default function privateRoutes() {
    return {
        path: "/",
        element: <NavBarWithConnect />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "*",
                element: <Navigate to="/" replace />
            }
        ]
    }
}
