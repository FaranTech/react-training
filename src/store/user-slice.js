import { createSlice } from "@reduxjs/toolkit";
/* WE ARE USING 'designate' state because, IN UPDATE-FORM.JS WE NEEDED TO SHOW CURRENT TO DESIGNATION, TO LET HIM KNOW BEFORE HE UPDATE DESIGNATION */
const userSlice = createSlice({
  name: "list",
  initialState: {
    userList: [
      { id: "u1", name: "Abubakar", designation: "ASE" },
      { id: "u2", name: "Waleed", designation: "Distributer" },
      { id: "u3", name: "Asad", designation: "ASE" },
      { id: "u4", name: "Gul", designation: "ASE" },
      { id: "u5", name: "Usman", designation: "ASE" },
    ],
    designate: "",
    alerts: false,
    actionState: null,
  },
  reducers: {
    /* IN USER-LIST.JS WE NEEDED TO SHOW CURRENT TO DESIGNATION, SO THIS DIPATCHER WILL BE CALLED BY USER-LIST.JS UPDATE BUTTON AND WILL BE ACCESSED BY UPDATE-FORM LABEL */
    setDesignation(state, action) {
      state.designate = action.payload;
    },
    replaceUser(state, action) {
      state.userList = action.payload.users;
    },
    createUser(state, action) {
      const newUser = action.payload;
      const existingUser = state.userList.find(
        (user) => user.id === newUser.id
      );

      if (!existingUser) {
        state.userList.push({
          id: newUser.id,
          name: newUser.name,
          designation: newUser.designation,
        });
        alert("user added successfully"); // to alert on successful addition
      }
    },
    removeUserFromList(state, action) {
      const id = action.payload;
      const existingUser = state.userList.find((user) => user.id === id);
      if (existingUser) {
        state.userList = state.userList.filter((user) => user.id !== id);
        //alert("user removed successfully");
      }
    },
    setAlert(state, action) {
      state.alert = true;
    },
    resetAlert(state, action) {
      state.alert = false;
    },
    setActionState(state, action) {
      state.actionState = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
