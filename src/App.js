import "./App.css";
import Auth from "./Auth";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/pages/Login";
import Signup from "./component/pages/Signup";
import DashBoard from "./component/pages/DashBoard";

import EditProfile from "./component/pages/EditProfile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/editProfile" element={<EditProfile />} />

        {/*   <Route path="/user-profile" element={<ProfileScreen />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
