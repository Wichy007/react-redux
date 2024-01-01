import { ReactElement } from "react"
import { connect } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { logedOut } from "../redux/user/user-action"

// const NavBar = (props: NavBarProps ): ReactElement => {
//     return (
//         <>
//             <ul>
//                 <li>home</li>
//                 <li>about</li>
//             </ul>
//             {props.children}
//         </>
//     )
// }


const NavBar = ({logedOut}: {logedOut: any}): ReactElement => {
    const navigation = useNavigate()
    return (
        <>
            <ul style={{display:"flex", justifyContent: "end", gap: "20px", listStyleType: "none"}}>
                <li onClick={()=>navigation("/home")}>home</li>
                <li onClick={()=>navigation("/about")}>about</li>
                <li><button onClick={() => logedOut()}>Log out</button></li>
            </ul>
            <Outlet/>
        </>
    )
}

const mapDispatchToProps = {
    logedOut
}

const NavBarWithConnect = connect(null, mapDispatchToProps)(NavBar)

export default NavBarWithConnect