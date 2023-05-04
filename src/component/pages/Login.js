import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { userLogin, getUserInfo } from "../../store/features/auth/authAction";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authenticate, setAuthenticate] = useState(
    localStorage.getItem("authenticated") || false
  );
  const { userTokens, userLoginSuccess } = useSelector((state) => state.auth);

  if (userLoginSuccess) {
    navigate("/dashboard");
  }
  useEffect(() => {
    if (Object.keys(userTokens).length > 0) {
      setAuthenticate(true);
      localStorage.setItem("authenticated", true);
      dispatch(getUserInfo());
    }
  }, [userTokens]);

  console.log(userTokens);
  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <div>
      {" "}
      <form className="Auth-form" onSubmit={handleSubmit(submitForm)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet? <span className="link-primary">Sign Up</span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
              {...register("email")}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
              {...register("password")}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <p className="text-center mt-2">
        Forgot <a href="#">password?</a>
      </p> */}
        </div>
      </form>{" "}
    </div>
  );
};
export default LoginScreen;
