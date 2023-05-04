import React from "react";
import { useState } from "react";
import Login from "./component/pages/Login";
import Signup from "./component/pages/Signup";
function Auth(props) {
  console.log("hi");
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    console.log("signin");
    return (
      <div>
        <Login></Login>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <Signup changeAuthMode={changeAuthMode}></Signup>
    </div>
  );
}

export default Auth;
