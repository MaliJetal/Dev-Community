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
      
      }
    >
      <span
        className = {
         
        }
      >
        Get Started
      </span>
      <Link
        to = "/admin/dashboard"
        
      >
        Dashboard
      </Link>
      <Link
        to="/admin/profile"
      >
        Profile
      </Link>
      <Link
        to="/admin/post"
        
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
       
      >
        Login
      </Link>
      <Link
        to = "/auth/register"
      
      >
        Register
      </Link>
      <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
      <span
        
      >
        Manage
      </span>
      <Link
        to="/settings"
       
      >
        Settings
      </Link>
      <Link
        to="/contact"
       
      >
        Contact Us
      </Link>
    </div>
    </>
  )
}

export default IndexDropdown;
