import './App.css'
import {Routes, Route} from "react-router-dom";
import Login from "./Pages/Login/Login";

const App = (props) => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Login />}/>
            </Routes>
        </>
    )
}

export default App
