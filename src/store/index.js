import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user-slice";
import authSlice from "./auth-slice";
import signupSlice from "./signup-slice";

const store = configureStore({
  reducer: {
    usr: userSlice.reducer,
    auth: authSlice.reducer,
    sign: signupSlice.reducer,
  },
});

export default store;
