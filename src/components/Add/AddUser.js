import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../../store/user-slice";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const idInputRef = useRef();
  const nameInputRef = useRef();
  const designationInputRef = useRef();
  const dispatch = useDispatch();
  // const [message, setMessage] = useState("");

  const list = useSelector((state) => {
    //  console.log(state);
    return state.usr.userList;
  });

  const addToUserList = (event) => {
    event.preventDefault();
    const newId = idInputRef.current.value;
    const newName = nameInputRef.current.value;
    const newDesignaion = designationInputRef.current.value;

    const updatedUsers = list.slice(); // create copy via slice to avoid mutating original state
    const existingUser = updatedUsers.find((user) => user.id === newId);
    if (!existingUser) {
      dispatch(
        userActions.createUser({
          id: newId,
          name: newName,
          designation: newDesignaion,
        })
      );
      //setMessage("Form Submitted");
    }
  };
  return (
    <div>
      {/* {message} */}
      <form className={classes.form} onSubmit={addToUserList}>
        <div className={classes.control}>
          <label htmlFor="id">Id</label>
          <input type="text" id="idInput" ref={idInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="nameInput" ref={nameInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="Designation">Designation</label>
          <input type="text" id="designationInput" ref={designationInputRef} />
        </div>
        <div className={classes.action}>
          <button>Add User</button>
          {/* <Link to="/user"> </Link> */}
        </div>
      </form>
    </div>
  );
};

export default AddUser;
