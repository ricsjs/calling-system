import { Routes, Route } from "react-router-dom"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

export default function RoutesApp(){
    return(
        <div>
            <Routes>

                <Route path="/" element={<SignIn />}/>
                <Route path="/register" element={<SignUp />}/>
            </Routes>
        </div>
    )
}