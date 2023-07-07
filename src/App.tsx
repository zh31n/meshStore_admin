import './App.css'
import {Routes, Route} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";

const App = (props) => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Login />}/>
                <Route path={'/profile'} element={<Profile />}/>
            </Routes>
        </>
    )
}

export default App
