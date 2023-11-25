import React, { useState } from "react";
import logo from "../imgs/dixie1.png";
import { useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../api/user";
import { FaCheck } from "react-icons/fa";
import { BiX } from "react-icons/bi";

const Register = ({ activeSession, setActiveSession }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassRequirements, setShowPassRequirements] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passNum, setPassNum] = useState(false);
  const [passSpecialChar, setPassSpecialChar] = useState(false);
  const [passUpperChar, setPassUpperChar] = useState(false);
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
              window.location.reload();
            } else {
              alert("Sign up failed. Please use another username.");
            }
          }
        }}
      >
        <div className="flex items-center">
          <h1 className="text-lg font-bold border-b-2 py-3 px-1 border-green-500 whitespace-nowrap">
            Ops BulletinBoard
          </h1>
          <img src={logo} className="h-28 ml-9"></img>
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
          onClick={() => {
            setShowPassRequirements(false);
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
            if (e.target.value.length > 6) {
              setPassLength(true);
            } else {
              setPassLength(false);
            }
            if (/\p{Lu}/u.test(e.target.value)) {
              setPassUpperChar(true);
            } else {
              setPassUpperChar(false);
            }
            if (/\d/.test(e.target.value)) {
              setPassNum(true);
            } else {
              setPassNum(false);
            }
          }}
          onClick={() => {
            setShowPassRequirements(true);
          }}
        />
        {showPassRequirements && (
          <div className="flex flex-col mt-2">
            <p className="ml-2">Please include the below in your password:</p>
            <div className="flex">
              <li className="mt-1">At least 7 characters long</li>
              {passLength ? (
                <FaCheck className="text-green-500 text-lg mt-2 ml-2" />
              ) : (
                <BiX className="text-red text-4xl ml-1" />
              )}
            </div>

            <div className="flex">
              <li className="mt-1">Capital Letter </li>
              {passUpperChar ? (
                <FaCheck className="text-green-500 text-lg mt-1.5 ml-2" />
              ) : (
                <BiX className="text-red text-4xl ml-1" />
              )}
            </div>

            <div className="flex pb-2">
              <li className="mt-1">Number</li>
              {passNum ? (
                <FaCheck className="text-green-500 text-lg mt-1.5 ml-2" />
              ) : (
                <BiX className="text-red text-4xl ml-1" />
              )}
            </div>
          </div>
        )}
        <button className="bg-green-500 text-white py-1 rounded-md mt-6 border-2 font-bold">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
