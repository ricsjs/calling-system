import { Routes, Route } from "react-router-dom"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Dashboard from "../pages/Dashboard"

import Private from "./Private"
import Profile from "../pages/Profile"
import Customers from "../pages/Customers"
import New from "../pages/New"

export default function RoutesApp(){
    return(
        <div>
            <Routes>

                <Route path="/" element={<SignIn />}/>
                <Route path="/register" element={<SignUp />}/>

                <Route path="/dashboard" element={<Private><Dashboard /></Private>}/>
                <Route path="/profile" element={<Private><Profile /></Private>}/>
                <Route path="/customers" element={<Private><Customers /></Private>}/>
                <Route path="/new" element={<Private><New /></Private>}/>
            </Routes>
        </div>
    )
}