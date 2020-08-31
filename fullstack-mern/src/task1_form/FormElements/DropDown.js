import React, { useState } from "react";
import "./DropDown.css";
const DropDown = (props) => {
  const [value, setValue] = useState("Dhaka");

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onInput(props.id, event.target.value, true);
  };

  return (
    <div className='selector'>
      <label className='selector__title'>
        {props.label}:
        <select
          className='selector__select'
          value={value}
          onChange={handleChange}
        >
          <option value='Dhaka'>Dhaka</option>
          <option value='Chittagong'>Chittagong</option>
          <option value='Barishal '>Barishal </option>
          <option value='Mymensingh'>Mymensingh</option>
          <option value='Khulna'>Khulna</option>
          <option value='Rajshahi '>Rajshahi </option>
          <option value='Rangpur'>Rangpur</option>
          <option value='Sylhet'>Sylhet</option>
        </select>
      </label>
    </div>
  );
};

export default DropDown;
