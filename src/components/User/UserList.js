import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user-slice";
import { Table, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import classes from "./UserList.module.css";
import { Fragment } from "react";
const UserList = (props) => {
  const dispatch = useDispatch();

  const alert = useSelector((state) => {
    //  console.log(state);
    return state.usr.alert;
  });

  const { id, name, designate } = props;

  const deleteFromUserList = () => {
    dispatch(userActions.removeUserFromList(id));
    dispatch(userActions.setActionState("delete"));
    dispatch(userActions.setAlert());
  };
  const sendPropHandler = () => {
    dispatch(userActions.setDesignation(designate));
  };

  return (
    <Fragment>
      <Table responsive>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Designation </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{designate}</td>
            <td>
              <Link to={`/user/${id}`}>
                <Button className={classes.action} onClick={sendPropHandler}>
                  Update
                </Button>
              </Link>
            </td>
            <td>
              <Button onClick={deleteFromUserList}>Delete</Button>
              {alert && <Redirect to="/user" />}
            </td>
          </tr>
        </tbody>
      </Table>
      {/* 
      <li className={classes.control}>
        <div>
          <label htmlFor="new-designation">Designation: {designate}</label>
          <label htmlFor="new-designation">User Name: {name}</label>
        </div>

        <Link to={`/user/${id}`}>
          <div className={classes.action}>
            <button className={classes.action}>Update</button>
          </div>
        </Link>

        <div className={classes.action}>
          <button onClick={deleteFromUserList}>Delete</button>
        </div>
      </li> */}
    </Fragment>
  );
};

export default UserList;
