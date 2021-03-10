import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

import instance from "./instance";
import * as types from "./actionTypes";

const setUser = (token) => {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch({
        type: types.SET_USER,
        payload: decode(token),
      });
    } catch (error) {
      console.log(`SetUser authActions Error: ${error}`);
    }
  };
};

export const signin = (newUser, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", newUser);
      dispatch(setUser(res.data.token));
      alert("Signed in Successfully");
      navigation.navigate("Home");
    } catch (error) {
      console.log(`signin authActions Error: ${error}`);
    }
  };
};

export const signup = (newUser, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      await dispatch(setUser(res.data.token));
      alert("Signed up Successfully");
      navigation.navigate("Home");
    } catch (error) {
      console.log(`signup authActions Error: ${error}`);
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;

      await dispatch({
        type: types.SET_USER,
        payload: null,
      });
      alert("Signed out Successfully");
    } catch (error) {
      console.log(`Signout Request Error: ${error}`);
    }
  };
};

export const checkForToken = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const user = decode(token);
      const currentTime = Date.now();

      if (currentTime < user.exp) {
        dispatch(setUser(token));
      } else {
        dispatch(signout());
      }
    }
  } catch (error) {
    console.log(`checkForToken authActions Error: ${error}`);
  }
};

export const userUpdate = (updatedUser, navigation) => async (dispatch) => {
  console.log(updatedUser);
  try {
    const res = await instance.put("/profile", updatedUser);
    navigation.navigate("Home");
    dispatch({
      type: types.UPDATE_USER,
      payload: { updatedUser: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
