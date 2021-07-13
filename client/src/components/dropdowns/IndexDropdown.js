import React from 'react';
import {Link} from 'react-router-dom';
import {createPopper} from '@popperjs/core';


const IndexDropdown = () => {
  // dropdown props
  const [dropdownOverShow,setDropdownOverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () =>{
    createPopper(btnDropdownRef.current,popoverDropdownRef.current, {
      placement : "bottom-start"
    });
    setDropdownOverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownOverShow(false);
  };
  return (
    <>
    <a 
      //className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center
      text-xs uppercase font-bold"
      href = "#pablo"
      ref = {btnDropdownRef}
      onClick={(e)=>{
        e.preventDefault();
        dropdownOverShow ? closeDropdownPopover() : openDropdownPopover();
      }}
    >
      Dev-Community
    </a>
    <div
      ref = {popoverDropdownRef}
      className = {
        (dropdownOverShow ? "block " : "hidden ") + 
      //  "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      }
    >
      <span
        //className = {
         // "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
        //}
      >
        Get Started
      </span>
      <Link
        to = "/admin/dashboard"
        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Dashboard
      </Link>
      <Link
        to="/admin/profile"
        //className= "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Profile
      </Link>
      <Link
        to="/admin/post"
        //className= "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Posts & Activity
      </Link>
      <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
      <span
        //className={
         // "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
       // }
      >
        Auth
      </span>
      <Link
        to = "/auth/login"
        //className = "text-sm py-2 px-4 font-normal block w-full whitspace-no-wrap bg-transparent text-gray-800"
      >
        Login
      </Link>
      <Link
        to = "/auth/register"
       // className = "text-sm py-2 px-4 font-normal block w-full whitspace-no-wrap bg-transparent text-gray-800"
      >
        Register
      </Link>
      <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
      <span
        //className={
         // "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
        //}
      >
        Manage
      </span>
      <Link
        to="/settings"
        //className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Settings
      </Link>
      <Link
        to="/contact"
        //className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        Contact Us
      </Link>
    </div>
    </>
  )
}

export default IndexDropdown;
