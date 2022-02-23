import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import{ getUser } from './../reducers/user';


const UserList = (props) => {
  const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const users = useSelector((state) => state.users);
  console.log("userlist", users);
  console.log("userlist1", users.users);

    return (<div>
    {users.users && users.users.map((user) => (
        <h3>name: {user.name}</h3>
    ))}</div>
    );
}

export default UserList;