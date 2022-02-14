import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    logins: [
      {
        email: "abc@xyz.com",
        passwd: "123",
      },
    ],
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      const logger = action.payload;

      const existingUser = state.logins.find(
        (user) => user.email === logger.email && user.passwd === logger.passwd
      );
      console.log(existingUser);
      if (existingUser) {
        state.isLoggedIn = true;
        localStorage.setItem("token", logger.email);
      }
    },

    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },

    loginCreator(state, action) {
      const logger = action.payload;
      // if email not found and this is new user so we can add
      const existingUser = state.logins.find(
        (user) => user.email === logger.email
      );
      // if email and passwd not found, add this is new user so we can add
      if (!existingUser) {
        state.logins.push({
          email: logger.email,
          passwd: logger.passwd,
        });
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
