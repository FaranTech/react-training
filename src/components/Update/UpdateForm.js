import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, Redirect } from "react-router-dom";
import { userActions } from "../../store/user-slice";
import classes from "./UpdateForm.module.css";
import { Form, Col, Button } from "react-bootstrap";

const UpdateForm = (props) => {
  const dispatch = useDispatch();
  const designationInputRef = useRef();
  const { userId } = useParams();

  const alert = useSelector((state) => {
    //  console.log(state);
    return state.usr.alert;
  });

  const value = useSelector((state) => {
    //  console.log(state);
    return state.usr.designate;
  });
  const list = useSelector((state) => {
    //  console.log(state);
    return state.usr.userList;
  });

  const updateToUserList = () => {
    const newDesignaion = designationInputRef.current.value;

    const updatedUsers = list.slice(); // create copy via slice to avoid mutating original state
    const existingUser = updatedUsers.find((user) => user.id === userId);
    if (existingUser) {
      const updatedUser = { ...existingUser }; // new object + copy existing properties to avoid state mutation
      updatedUser.designation = newDesignaion;
      const existingUserIndex = updatedUsers.findIndex(
        (user) => user.id === userId
      );
      updatedUsers[existingUserIndex] = updatedUser;
    }

    const newUser = {
      users: updatedUsers,
    };
    //console.log(newUser);
    dispatch(userActions.replaceUser(newUser));
    dispatch(userActions.setAlert());
    dispatch(userActions.setActionState("update"));
    //alert("Designation updated successfully"); // to alert on successful updateion
  };
  return (
    <Fragment>
      <Form>
        <Form.Group className={classes.control}>
          <Form.Label htmlFor="new-designation">
            Current Designation: {value}
          </Form.Label>
          <Form.Control
            type="text"
            id="new-designation"
            ref={designationInputRef}
            placeholder="Enter New Designation"
          />
        </Form.Group>
        <Form.Group>
          <Button type="button" onClick={updateToUserList}>
            Update User
          </Button>

          {/* <Link to="/user"> </Link> */}
        </Form.Group>
      </Form>
      {alert && <Redirect to="/user" />}
    </Fragment>
  );
};
export default UpdateForm;
