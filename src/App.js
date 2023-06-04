import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import UpdateProfile from "./components/UpdateProfile";
import DashBoard from "./components/DashBoard";
import AuthContextProvider from "./contextApi/AuthContext";

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="w-100"
        style={{
          maxWidth: "400px",
        }}
      >
        <BrowserRouter>
          <AuthContextProvider>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route
                path="/"
                element={
                  <>
                    Stop At :
                    <Link to="https://youtu.be/xv5PrW481hw?list=PLCrPioFXyfwJMXCRtdRaBOLWNIjxu3VSf">
                      Go
                    </Link>
                    <Link to="https://console.firebase.google.com/u/0/project/react-firebase-auth-ismaeinz/settings/general/web:ZTZhZjQ0ZTUtNzA3Ny00NWNiLWEzOWUtODU1OGU0ZjFlZDcw">
                      Firebase
                    </Link>
                    <hr />
                    <DashBoard />
                  </>
                }
              />
            </Routes>
          </AuthContextProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
};

export default App;
