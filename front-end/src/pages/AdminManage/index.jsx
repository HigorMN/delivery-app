import React from 'react';
import Header from '../../components/Header';
import RegisterNewUser from '../../components/RegisterNewUser';
import UserList from '../../components/UserList';

export default function AdminManage() {
  return (
    <>
      <Header />
      <RegisterNewUser />
      <UserList />
    </>
  );
}
