import React from "react";
import styled from "./LoginCard.module.css";
import SocialIcons from "./SocialIcons";
import LoginBtn from "./LoginBtn";
import LoginInput from "./LoginInput";

function LoginCard() {
  return (
    <div className={styled["login-card"]}>
      <h1 className={styled["login"]}>LOGIN</h1>
      <LoginInput />
      <LoginBtn />
      <span className={styled["Or"]}>OR</span>
      <SocialIcons />
    </div>
  );
}

export default LoginCard;
