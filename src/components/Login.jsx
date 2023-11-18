import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/dixie1.png";
import { loginUser } from "../api/user";

const Login = () => {
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

          // console.log("this is username", username);

          let token = await loginUser(username, password);
          if (!token) {
            alert("Login Failed.");
            return;
          }
          // console.log(token);
          // localStorage.setItem("token", JSON.stringify(token.token));
          localStorage.setItem("username", JSON.stringify(username));
          // setActiveSession(true);
          setUsername("");
          setPassword("");
          navigate("/Turnover");
          window.location.reload();
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
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label className="mt-2 mb-1.5 px-1 text-lg">Password</label>
        <input
          className="bg-stone-50 px-1 py-1 rounded-md indent-2 border-2"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="bg-green-500 text-white py-1 rounded-md mt-6 border-2 font-bold">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
