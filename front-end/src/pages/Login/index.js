import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <Redirect to="/login" />
      <div>Login</div>
    </>
  );
}
