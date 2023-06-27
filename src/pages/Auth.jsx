import React, { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../utils/firebaseConfig";
const Auth = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [param, setparam] = useState("login");
  const authe = getAuth(app);
  const register=()=>{
    const {email,password}=credentials;
    createUserWithEmailAndPassword(authe, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      });
  }

  const login=()=>{
    const {email,password}=credentials;
    // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
signInWithEmailAndPassword(authe, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("success")
    console.log(user)
    localStorage.setItem('userId',user.uid);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(credentials);
    if(param==='register'){
      register();
    }
    else if(param==='login'){
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
    // import { getAuth } from "firebase/auth";

    // const auth = getAuth();
    const user = authe.currentUser;
    
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // ...
      console.log("user-")
      console.log(user);
    } else {
      console.log("no user")
    }
  }, [authe.currentUser])
  return (
    <div>
      <form>
        <h1 className="text-2xl">{param}</h1>
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          className="border-solid border-2 border-black"
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          className="border-solid border-2 border-black"
        />
        <button
          onClick={handleSubmit}
          className="border-solid border-2 border-black"
        >
          {param}
        </button>
        <button
          className="text-black text-xl"
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
