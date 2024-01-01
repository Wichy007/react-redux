import { ReactElement } from "react";
import { connect } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import privateRoutes from "./privateRoutes";
import publicRoutes from "./publicRoutes";

const App = ({ checkAuth }: { checkAuth: boolean }): ReactElement => {
    const router = createBrowserRouter([
        checkAuth ? privateRoutes() : {},
        ...publicRoutes()
    ])
    return <RouterProvider router={router} />
}

const mapStateToProps = (state: any) => {
    return {
        checkAuth: state.userReducer.isLogin
    }
}

const AppWithConnected = connect(mapStateToProps)(App)

export default AppWithConnected