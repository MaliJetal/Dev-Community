import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const PagesDropdown = () => {
  //dropdowns props
  const [dropDownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownRef = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  }
  const closeDropdownRef = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <div className="PagesDropdown">
      <a
        href="#pablo"
        
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropDownPopoverShow ? closeDropdownRef() : openDropdownRef();
        }}
      >
        Drilldown
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropDownPopoverShow ? "block " : "hidden ") +
          
        }
      >
        <span
         
        >
          Admin
        </span>
        <Link
          to="/admin/dashboard"
          className={
            
          }
        >
          Dashboard
        </Link>
        <Link
          to="/admin/dk"
          
        >
          DK
        </Link>
        <div ></div>
        <span
       
        >
          Auth Layout
        </span>
        <Link
          to="/auth/login"
          
        >
          Login
        </Link>
        <Link
          to="/auth/register"
          
        >
          Register
        </Link>
        <div  />
        <span
          
        >
          No Layout
        </span>
        <Link
          to="/landing"
          
        >
          Landing
        </Link>
        <Link
          to="/profile"
          
        >
          Profile
        </Link>
      </div>
    </div>
  );
}
export default PagesDropdown;
