import React from "react";
import { Redirect } from "react-router-dom";

export default function Logout() {
  const performRedirect = () => {
    return <Redirect to="/" />;
  };
  return (
    <div>
      <h1>You are logged out..</h1>
      {performRedirect()}
    </div>
  );
}
