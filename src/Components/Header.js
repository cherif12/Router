import { Link,NavLink } from "react-router-dom";
import logo from "./Logo.png";
import "../App.css";

export const Header = () => {
  return (
    <div className="header">
      <NavLink style={{textDecoration:"none", fontSize:"25px", color:"white"}} to="/">
         Movies
      </NavLink>
      
      <NavLink style={{textDecoration:"none", fontSize:"25px", color:"white"}} to="/add">
        Add
      </NavLink>
    </div>
  );
};
