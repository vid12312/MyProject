import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/features/auth/authAction";

function Signup() {
  const [userData, setUserData] = useState({});
  const { success } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    data.email = data.email.toLowerCase();

    const objData = {};

    objData.email = data.email;
    objData.city = data.city;
    objData.display_name = `${data.first_name}" "${data.last_name}`;
    objData.first_name = data.first_name;
    objData.last_name = data.last_name;
    objData.gender = data.gender;
    objData.country = data.country;
    objData.password = data.password;
    console.log(objData);
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      alert("Password mismatch");
    } else {
      setUserData(objData);
    }
  };

  useEffect(() => {
    if (Object.keys(userData).length !== 0) {
      dispatch(registerUser(userData));
    }
  }, [userData]);

  const handleClick = () => {
    navigate("/auth");
  };

  return (
    <div>
      {!success ? (
        <form className="Auth-form" onSubmit={handleSubmit(submitForm)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>

            <div className="form-group mt-3">
              <label>First Name</label>
              <input
                name="first_name"
                type="text"
                className="form-control mt-1"
                placeholder="First Name"
                {...register("first_name")}
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                name="last_name"
                {...register("last_name")}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email"> Email ID</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                name="password"
                {...register("password")}
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                name="confirmPassword"
                {...register("confirmPassword")}
              />
            </div>
            <div className="form-group mt-3">
              <label>City</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="City"
                name="city"
                {...register("city")}
              />
            </div>
            <div className="form-group mt-3">
              <label>Country</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Country"
                name="country"
                {...register("country")}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label> Gender</label>
                <select
                  className="form-control"
                  name="gender"
                  {...register("gender")}
                >
                  <option selected>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="not binary">Not Binary</option>
                  <option value="rather not say">Rather Not Say</option>
                </select>
              </div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            {/*  <p className="text-center mt-2">
        Forgot <a href="#">password?</a>
      </p> */}
          </div>
        </form>
      ) : (
        <form className="Auth-form" onSubmit={handleSubmit(submitForm)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">User Registration Successful</h3>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              SignIn
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Signup;
