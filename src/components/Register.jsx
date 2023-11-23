import React, { useState } from "react";
import logo from "../imgs/dixie1.png";
import { useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../api/user";

const Register = ({ activeSession, setActiveSession }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mx-1 mt-40">
      <form
        className="flex flex-col w-96 justify-self-center p-8 bg-white shadow-md"
        type="submit"
        onSubmit={async (e) => {
          e.preventDefault();
          if (username.length < 4) {
            alert("Please use at least 5 characters in username.");
            return;
          } else if (password.length < 6) {
            alert("Please use at least 7 characters for your password.");
            return;
          } else if (!/\p{Lu}/u.test(password)) {
            alert("Please include a capital letter in your password.");
            return;
          } else if (!/\d/.test(password)) {
            alert("Please include one number in your password.");
            return;
          } else {
            // console.log("this is username", username);
            // console.log("this is password", password)
            let user = await createUser(username, password);
            // console.log("this is user", user);
            if (user.user) {
              let token = await loginUser(username, password);
              // console.log(token);

              // localStorage.setItem("token", JSON.stringify(token.token));
              localStorage.setItem("username", JSON.stringify(username));
              alert("Sign up successful");
              setActiveSession(true);
              setUsername("");
              setPassword("");
              navigate("/Turnover");
              window.location.reload()
            } else {
              alert("Sign up failed. Please use another username.");
            }
          }
        }}
      >
        <div className="flex items-center">
          <h1 className="text-lg font-bold border-b-2 py-3 px-1 border-green-500">
            Ops Dashboard
          </h1>
          <img src={logo} className="h-28 ml-12"></img>
        </div>

        <label className="my-1.5 px-1 text-lg">Network ID</label>
        <input
          className="bg-stone-50 px-1 py-1 rounded-md indent-2 border-2"
          type="text"
          placeholder="Username"
          maxLength={12}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label className="mt-2 mb-1.5 px-1 text-lg">Password</label>
        <input
          maxLength={50}
          value={password}
          className="bg-stone-50 px-1 py-1 rounded-md indent-2 border-2"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="bg-green-500 text-white py-1 rounded-md mt-6 border-2 font-bold">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
