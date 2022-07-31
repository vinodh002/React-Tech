import React from "react";
import styled from "./LoginBtn.module.css";

function LoginBtn() {
  return <button type="submit" className={styled["loginBtn"]}>Login</button>;
}

export default LoginBtn;
