import "./App.css";
import {Routes, Route, Navigate} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useEffect} from "react";
import Api from "./Api/Api.ts";
import {useDispatch} from "react-redux";
import {setUsers} from "./store/action/userAction.ts";

const App = () => {
    const isReg = useTypedSelector(state => state.user.reg);

    const dispatch: any = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')

        typeof token === 'string' && Api.checkToken(token).then(res => {
            console.log(res.data)
            dispatch(setUsers({
                role: res.data.role,
                token: token
            }))
        })
    }, []);

    return (
        <>
            <Routes>
                {isReg ? (
                    <>
                        <Route path="*" element={<Navigate to={"/profile/today"}/>}/>
                        <Route path={"/profile/*"} element={<Profile/>}/>
                    </>
                ) : (
                    <>
                        <Route path="*" element={<Navigate to={"/"}/>}/>
                        <Route path={"/"} element={<Login/>}/>
                    </>
                )}
            </Routes>
        </>
    );
};

export default App;
