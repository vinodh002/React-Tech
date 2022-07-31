import React from "react";
import styled from "./LoginPage.module.css";
import LoginCard from "./LoginCard";

function LoginPage() {
  return (
    <div className={styled["login-page"]}>
      <header className={styled["loginPage-header"]}>
        Tech <span className={styled["headerSpan"]}>Mysore</span>
      </header>
      <LoginCard />
    </div>
  );
}

export default LoginPage;
