import React from "react";
import styled from "./LoginInput.module.css";

function LoginInput() {
  return (
    <div className={styled["login-input"]}>
      <input
        type="text"
        placeholder="Email"
        className={styled["input-email"]}
      />

      <div>
        <input
          type="text"
          placeholder="Password"
          className={styled["input-password"]}
        />
        <svg
          className={styled["forget-svg"]}
          xmlns="http://www.w3.org/2000/svg"
          width="10.829"
          height="20.767"
          viewBox="0 0 8.829 14.767"
        >
          <path
            id="_411fc4ff840b182f04b7e394a95ce1b8"
            data-name="411fc4ff840b182f04b7e394a95ce1b8"
            d="M16.553,4.845a4.072,4.072,0,0,0-3.858-3.818A4.432,4.432,0,0,0,7.864,3.883,3.754,3.754,0,0,0,10.51,8.417v5.614a.137.137,0,0,0,.049.1l1.818,1.584a.185.185,0,0,0,.237,0l1.754-1.528a.133.133,0,0,0,0-.2l-1.288-1.218a.135.135,0,0,1-.044-.108.14.14,0,0,1,.059-.1l1.261-.931a.133.133,0,0,0,.025-.2L13,9.849a.134.134,0,0,1-.034-.088V8.621a4.028,4.028,0,0,0,3.587-3.777Zm-4.414,0a1.248,1.248,0,0,1-1.324-1.154,1.248,1.248,0,0,1,1.324-1.154,1.248,1.248,0,0,1,1.324,1.154,1.248,1.248,0,0,1-1.324,1.154Z"
            transform="translate(-7.724 -0.995)"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className={styled["forget-password"]}>
        <a href="#" className={styled["fp-a"]}>
          Forget Password ?
        </a>
      </div>
    </div>
  );
}

export default LoginInput;
