import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const clickHandler = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.clear("user");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="main lg:flex md:flex flex-wrap justify-between items-center
     px-4 bg-[#cdf7e0] py-4 shadow-md"
    >
      <div className="left">
        <div
          onClick={() => navigate("/home")}
          className="cursor-pointer logo font-bold text-2xl text-gray-800 hover:text-gray-600 text-center"
        >
          Photify
        </div>
      </div>
      <div className="flex border-2 border-black rounded-lg relative">
        <input
          type="search"
          className="md:w-80 lg:w-96 xl:w-[650px] outline-none bg-transparent  p-2"
          placeholder="Search..."
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className="p-3" type="submit" onClick={clickHandler}>
          <BsSearch />
        </button>
      </div>
      <div className="right">
        <ul className="flex space-x-4  justify-center items-center">
          {user && (
            <li onClick={logout} className="cursor-pointer">
              Logout
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
