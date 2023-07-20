import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App = () => {
  const isReg = useTypedSelector(state => state.user.reg);

  return (
    <>
      <Routes>
        {isReg == true ? (
          <>
            <Route path="*" element={<Navigate to={"/profile/settings"} />} />
            <Route path={"/profile/*"} element={<Profile />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Navigate to={"/"} />} />
            <Route path={"/"} element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
