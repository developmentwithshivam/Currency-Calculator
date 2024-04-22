import { useEffect, useState } from "react";
import React from "react";
import "./Componentcss/Input.css";

function Input({data,lable,selectedcurrencyvalue,setselectedcurrencyvalue,amount,setamount,run}) {

  

 
 const [inputlist,setinputlist]=useState([])
  useEffect(()=>{
    if(data){
      if(selectedcurrencyvalue){

        setinputlist(Object.keys(data[selectedcurrencyvalue]));
      }
    }
    
  },[data])

  return (
    <div id="input-box">
      <div id="Upper">
        <h3 id="heading-light">{lable}</h3>
        <h3 id="heading-light">Currency Type</h3>
      </div>
      <div id="Lower">
        <input type="number" id="number" placeholder='0' value={amount} onChange={(e)=>{Number(setamount(e.target.value),run())}}></input>

        <select id="currency-dropdown" value={selectedcurrencyvalue} onChange={(e)=>{setselectedcurrencyvalue(e.target.value)}}>
         {
          inputlist.map((element,index)=>{
            return (
               <>
                  <option key={index} value={element}>{element}</option>
              </>
            )
          })
         }
        </select>
        
      </div>
    </div>
  );
}

export default Input;
