import React from "react";
import Header from "../layout/Header";
import { useSelector } from "react-redux";

function DashBoard() {
  const { userInfo } = useSelector((state) => state.auth);

  console.log("userInfo", userInfo);
  return (
    <div>
      <div>
        <Header name={userInfo.display_name}></Header>
      </div>
      <div>Dash Board</div>
    </div>
  );
}

export default DashBoard;
