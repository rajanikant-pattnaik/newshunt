import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [param, setparam] = useState("login");
  const authe = getAuth(app);
  const navigate=useNavigate();
  const register = () => {
    const { email, password } = credentials;
    createUserWithEmailAndPassword(authe, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const login = () => {
    const { email, password } = credentials;
    signInWithEmailAndPassword(authe, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("userId", user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (param === "register") {
      register();
    } else if (param === "login") {
      login();
    }
    setCredentials({
      email: "",
      password: "",
    });
  };
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
     const userid=localStorage.getItem('userId');
     if(userid){
      console.log("user exist");
      navigate('/');
     }
     else{
      console.log('user doesnot exist');
     }
  }, [navigate]);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <form className="h-96 w-96 bg-slate-500 p-8 space-y-6">
        <h1 className="text-4xl text-center">{param}</h1>
        <div>
          <label htmlFor="email" className="block text-center">
            email
          </label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="border-solid border-2 border-white block w-full bg-transparent px-3 rounded-2xl h-8"
          />
       
          <label htmlFor="password" className="block text-center mt-3">
            password
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="border-solid border-2 border-white block w-full bg-transparent px-3 rounded-2xl h-8"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="border-solid border-2 border-white w-full hover:bg-white hover:text-black mt-5 h-8 rounded-2xl"
        >
          {param}
        </button>
        <button
          className="text-white block text-center w-full hover:bg-blue-900 h-8 rounded-2xl"
          onClick={(e) => {
            e.preventDefault();
            if (param === "login") setparam("register");
            else if (param === "register") setparam("login");
          }}
        >
          {param === "login" ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
