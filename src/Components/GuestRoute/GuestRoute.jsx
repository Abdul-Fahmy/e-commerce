import React from "react";
import { Navigate } from "react-router-dom";

export default function GuestRoute({ children }) {
  let token = false;
  if (token) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}
