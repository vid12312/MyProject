import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../store/features/auth/authAction";
import Header from "../layout/Header";
function EditProfile() {
  const { userInfo } = useSelector((state) => state.auth);
  const [formInput, setFormInput] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const submitForm = (data) => {
    console.log(data);
    dispatch(updateProfile(data));
  };
  return (
    <div>
      <Header></Header>{" "}
      <form className="Auth-form" onSubmit={handleSubmit(submitForm)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">My Profile</h3>
          <div className="form-group mt-3">
            <label htmlFor="email"> Email ID</label>
            <input
              value={userInfo.email}
              type="email"
              className="form-control mt-1"
              name="email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Display Name</label>
            <input
              defaultValue={userInfo.display_name}
              value={formInput.display_name}
              type="text"
              className="form-control mt-1"
              onChange={(e) => {
                setFormInput({ display_name: e.target.value });
              }}
              name="display_name"
              {...register("display_name")}
            />
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              defaultValue={userInfo.first_name}
              value={formInput.first_name}
              name="first_name"
              type="text"
              className="form-control mt-1"
              onChange={(e) => {
                setFormInput({ first_name: e.target.value });
              }}
              {...register("first_name")}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              defaultValue={userInfo.last_name}
              value={formInput.first_name}
              type="text"
              className="form-control mt-1"
              name="last_name"
              onChange={(e) => {
                setFormInput({ last_name: e.target.value });
              }}
              {...register("last_name")}
            />
          </div>

          <div className="form-group mt-3">
            <label>City</label>
            <input
              defaultValue={userInfo.city}
              value={formInput.city}
              type="text"
              className="form-control mt-1"
              name="city"
              onChange={(e) => {
                setFormInput({ city: e.target.value });
              }}
              {...register("city")}
            />
          </div>
          <div className="form-group mt-3">
            <label>Country</label>
            <input
              defaultValue={userInfo.country}
              value={formInput.country}
              type="text"
              className="form-control mt-1"
              name="country"
              onChange={(e) => {
                setFormInput({ fcountry: e.target.value });
              }}
              {...register("country")}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Gender</label>
              <select
                className="form-control"
                defaultValue={userInfo.gender}
                value={formInput.gender}
                name="gender"
                onChange={(e) => {
                  setFormInput({ first_name: e.target.gender });
                }}
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
              Update Profile
            </button>
          </div>
          {/*  <p className="text-center mt-2">
  Forgot <a href="#">password?</a>
</p> */}
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
