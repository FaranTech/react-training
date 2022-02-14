import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    newEntry: [{ email: "abc@xyz.com", passwd: "123" }],
  },
  reducers: {
    signup(state, action) {
      const logger = action.payload;
      //console.log(logger.email);

      const existingAdmin = state.newEntry.find(
        (entry) => entry.email === logger.email
      );

      if (!existingAdmin) {
        state.newEntry.push({
          email: logger.email,
          passwd: logger.passwd,
        });
        /* we want to dispatched new entry to be added in signup and and a dispatch a login entry against this in loginCreator
        so if if user is added here, the  check will turn true and authActions.loginCreator function in 'AuthForm' will be able to execute depending on this check state
        means if user has signed up successfully then also make him able to login, so the data entered by 'AuthForm' will also be pushed in login array of auth-slice*/
        alert("Admin added successfully"); // to alert admin added successfully
      } else {
        alert("This email is already registered"); // to alert admin already exists
      }
    },
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice;
