import { Route, Switch } from "react-router-dom"
import { NavBar } from "../ui/NavBar"

export const HeaderRoutes = () => {
    return (
        <>


            <Route exact path="/home" component={Header}></Route>
            <Route path="/proyects"></Route>
            <Route path="/skills"></Route>
            <Route path="/about"></Route>

        </>
    )
}
