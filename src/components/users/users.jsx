import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_users_request } from '../../actions/users';
import UserItemComponent from './useritem';

const UserComponent = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.users.loading);

  useEffect(() => {
    dispatch(get_users_request());
  }, [])

  return (
    <>
      {users.loading && <p>Loading...</p>}
      {users.users.length === 0 && !loading && <p>No users available!</p>}
      {users.users.length > 0 && users.users.map((user) => (
        <UserItemComponent key={user.id} user={user} />
      ))}
    </>
  )
}
export default UserComponent;