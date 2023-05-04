import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "https://demo.mypits.org:8059";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, rejectWithValue) => {
    try {
      const body = JSON.stringify(data);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const result = await axios.post(
        `https://demo.mypits.org:8059/api/v1/register`,
        body,
        config
      );
      return result;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const userLogin = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/v1/token`,
        body,
        config
      );
      console.log(data);
      // store user's token in local storage
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.resfresh);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getUserInfo = createAsyncThunk(
  "auth/getUserInfo",
  async (body, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${backendURL}/api/v1/my-profile`,

        config
      );

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (body, { rejectWithValue }) => {
    try {
      console.log(body);
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.patch(
        `${backendURL}/api/v1/update-profile`,
        body,
        config
      );

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
