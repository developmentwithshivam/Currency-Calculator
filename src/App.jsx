import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Component/Input.jsx";
import { Usecurrencyinfo } from "./Hooks/Usecurrencyinfo.js";
function App() {
  let [arr,setarr] = useState()


  // useEffect(()=>{
  //   setarr(Usecurrencyinfo());
  //   console.log("this is by return",arr);
  // },[])

//   Usecurrencyinfo()
// .then( (newarr)=>{console.log(newarr)} )
const getdata = async ()=>{

  let data = await Usecurrencyinfo();
  // console.log(data);
  setarr(data);
  console.log("worked");
}

// setarr(yes);

useEffect(()=>{getdata()},[]);

useEffect(() => {
  console.log(arr); // This will print the updated value of arr
}, []);
 
  // const asynctask = () => {
  //   const myresult = Usecurrencyinfo(currency);
  //   setMyAllResults(myresult);

  // }

  return (
    <>
      <div id="background">
        <div id="content-box">
          <div id="inputbox">
            {/* <div id="inputbox"> */}
            <Input  data={[arr]}/>
          <button id="swap">Swap</button>
            <Input />
            {/* </div> */}

            <button id="convert-button" >Convert USD to INR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
