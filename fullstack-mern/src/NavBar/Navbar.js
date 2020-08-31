import React from "react";
import Button from "../task1_form/FormElements/Button";
import "./Navbar.css";
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__options'>
        <Button to='/'>Task 1</Button>
        <Button to='/table'>Task 2</Button>
        <Button to='/drop'>Task 3</Button>
      </div>
    </div>
  );
}

export default Navbar;
