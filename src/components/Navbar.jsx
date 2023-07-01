import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (term) {
      navigate(`/search/${term}`);

      setTerm("");
    }
  };
  const logOut = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };
  return (
    <div>
      <nav className=" mx-auto flex justify-between px-4 py-6 bg-gray-900 text-slate-200">
        <div>
          <h3
            className="text-2xl"
            onClick={() => {
              navigate("/");
            }}
          >
            NewsHunt
          </h3>
        </div>
        <div className="text-black">
          <input
            type="text"
            name="search"
            placeholder="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-80 h-10 rounded-3xl bg-transparent border-blue-200 border-2 text-white px-5"
          />
          <button
            className="text-white ml-4 hover:bg-slate-700 hover:border-2 hover:rounded-2xl w-20"
            onClick={handleSubmit}
          >
            search
          </button>
        </div>

        <ul className="flex">
          <li
            className="px-3 text-2xl font-semibold hover:underline hover:text-blue-300"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className="px-3 text-2xl font-semibold hover:underline hover:text-blue-300"
            onClick={() => {
              navigate("/history");
            }}
          >
            History
          </li>
          <li className="px-3 text-2xl font-semibold hover:underline hover:text-blue-300">
            Likes
          </li>
          <li
            className="px-3 text-2xl font-semibold hover:underline hover:text-blue-300"
            onClick={logOut}
          >
            Account
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
