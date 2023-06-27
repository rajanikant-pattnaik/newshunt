import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [term, setTerm] = useState("");
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (term) {
      navigate(`/search/${term}`);

      setTerm('');
    }

  };
  const logOut=()=>{
    localStorage.removeItem('userId');
  }
  return (
    <div>
      <nav className=" mx-auto flex justify-between px-4 py-4 bg-indigo-900 text-slate-200">
        <div>
          <h3 className="text-2xl">NewsHunt</h3>
        </div>
        <div className="text-black">
          <input
            type="text"
            name="search"
            placeholder="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="text-white" onClick={handleSubmit}>search</button>
        </div>

        <ul className="flex">
          <li className="px-3 text-2xl font-semibold hover:underline hover:text-blue-300">
            Home
          </li>
          <li className="px-3 text-2xl font-semibold hover:underline hover:text-blue-300">
            History
          </li>
          <li className="px-3 text-2xl font-semibold hover:underline hover:text-blue-300">
            Likes
          </li>
          <li className="px-3 text-2xl font-semibold hover:underline hover:text-blue-300" onClick={logOut}>
            Account
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
