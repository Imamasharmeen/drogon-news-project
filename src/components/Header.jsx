import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-6 gap-4 border">
        <div >
          <img src={logo} className=""></img>
        </div>
        <h2 className="">Journalism Without Fear or Favour</h2>
        <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
