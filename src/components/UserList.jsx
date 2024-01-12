import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import{ getUser } from './../reducers/user';


const UserList = (props) => {
  const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  
  const users = useSelector((state) => state.usersSlice);
  console.log("userlist", users.users);

  return (<ol>
    {users.users && users.users.map((user) => (
        <li key={user.id}>name: {user.name}</li>
    ))}</ol>
    );
}

export default UserList;