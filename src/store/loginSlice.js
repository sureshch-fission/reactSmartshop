import { createSlice } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

const initialAuthstate = {
  isAuthenticated: false,
};
const loginSlice = createSlice({
  name: "loginAuthentication",
  initialState: initialAuthstate,

  reducers: {
    login(state, action) {

      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', state.isAuthenticated);
      localStorage.setItem('userDetails', JSON.stringify(action.payload));

    },
    logout(state) {

      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", state.isAuthenticated);
      localStorage.removeItem('userDetails');
      localStorage.removeItem('isAuthenticated');

    }


  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
