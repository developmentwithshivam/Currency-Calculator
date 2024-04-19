import { useState } from "react";
import React from "react";
import "./Componentcss/Input.css";

function Input({arr}) {
  // console.log(arr);
  return (
    <div id="input-box">
      <div id="Upper">
        <h3 id="heading-light">From</h3>
        <h3 id="heading-light">Currency Type</h3>
      </div>
      <div id="Lower">
        <input type="number" id="number" placeholder='0'></input>

        <select id="currency-dropdown">
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
      </div>
    </div>
  );
}

export default Input;
