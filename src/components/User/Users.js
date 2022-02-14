import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./UserList";
import { userActions } from "../../store/user-slice";
// const DUMMY_USERS = [

// ];

const Users = (props) => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => {
    //  console.log(state);
    return state.usr.alert;
  });

  const actionState = useSelector((state) => {
    //  console.log(state);
    return state.usr.actionState;
  });

  // use that name 'usr' from store/index export object for user state
  const list = useSelector((state) => {
    console.log(state);
    return state.usr.userList;
  });
  const clear = () => {
    dispatch(userActions.resetAlert());
  };
  console.log(list);
  var alertMessage;
  if (actionState === "update") {
    alertMessage = (
      <p>
        <strong>Designation</strong> updated Successfully
      </p>
    );
  }
  if (actionState === "delete") {
    alertMessage = (
      <p>
        <strong>User</strong> Removed Successfully
      </p>
    );
  }
  return (
    <section>
      <h2>Users</h2>

      {alert && (
        <div className="alert alert-success" role="alert">
          {alertMessage}
          <Button onClick={clear}>X</Button>
        </div>
      )}

      <ul>
        {list.map((user) => (
          <UserList
            key={user.id}
            id={user.id}
            name={user.name}
            designate={user.designation}
          />
        ))}
      </ul>
    </section>
  );
};

export default Users;
