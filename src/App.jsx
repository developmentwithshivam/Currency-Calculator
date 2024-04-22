import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Component/Input.jsx";
import { Usecurrencyinfo } from "./Hooks/Usecurrencyinfo.js";
function App() {
  let [datafrom,setdatafrom] = useState()
  let [datato,setdatato] = useState()
  let [start,setstart] = useState(false)
  let [selectedcurrencyvaluefrom,setselectedcurrencyvaluefrom] = useState("usd")
  let [selectedcurrencyvalueto,setselectedcurrencyvalueto] = useState("inr")
  const [fromamount,setfromamount]=useState(1)
  const [toamount,settoamount]=useState(0)
  const [finalamount,setfinalamount]=useState(0)
  // const [finalamountto,setfinalamountto]=useState(0)
  
// getdata chlne sa phle to input component run hua hoga selectedcurrencyvaluefrom set krna k liya or input component ko data chyia list bnana k liya to phle kya chla input ya data...
const getdata = async ()=>{
  try {
    let datafrom = await Usecurrencyinfo(selectedcurrencyvaluefrom);
    setdatafrom(datafrom);
 let datato = await Usecurrencyinfo(selectedcurrencyvalueto);
   setdatato(datato);
  } catch (error) {
    console.log("Data not found error 404");
  }
 
}


useEffect(()=>{getdata()},[start,selectedcurrencyvaluefrom,selectedcurrencyvalueto,fromamount,toamount]);


useEffect(()=>{
  // const datashow = ()=>{
    if(datafrom){
      // console.log("datafrom==",datafrom);
      if(datafrom[selectedcurrencyvaluefrom]){
        let convertedvalue = datafrom[selectedcurrencyvaluefrom][selectedcurrencyvalueto];
        console.log("how are ",convertedvalue);
        setfinalamount(fromamount*convertedvalue)
      }
      
      
    }
  // }
  // datashow();
},[datafrom])
// useEffect(()=>{
//   const datashow = ()=>{
//     if(datato){
//       // console.log("datato==",datato);
//       if(datato[selectedcurrencyvalueto]){
//         let convertedvalue = datato[selectedcurrencyvalueto][selectedcurrencyvaluefrom];
//         console.log("how are ",convertedvalue);
//         setfinalamountto(toamount*convertedvalue)
//       }
      
      
//     }
//   }
//   datashow();
// },[datato])

useEffect(()=>{console.log("finalamount===",finalamount)
settoamount(finalamount)},[finalamount])


    const swap=()=>{
      let swapvar = selectedcurrencyvaluefrom;
      setselectedcurrencyvaluefrom(selectedcurrencyvalueto);
      setselectedcurrencyvalueto(swapvar);
    }

    const run = ()=>{
      setstart(!start)
    }

  return (
    <>
          <form onSubmit={(e)=>{e.preventDefault();
         

            setstart(!start);
          
            console.log("submited");
            }}>
      <div id="background">
        <div id="content-box">

          <div id="inputbox">
            <Input  data={datafrom} lable="Form" selectedcurrencyvalue={selectedcurrencyvaluefrom} setselectedcurrencyvalue={setselectedcurrencyvaluefrom} amount={fromamount} setamount={setfromamount} run={run}/>
            <button id="swap" onClick={swap}>Swap</button>
            <Input data={datato} lable="To" selectedcurrencyvalue={selectedcurrencyvalueto} setselectedcurrencyvalue={setselectedcurrencyvalueto} amount={toamount} setamount={settoamount} />

            <button id="convert-button" >Convert {selectedcurrencyvaluefrom.toUpperCase()} to {selectedcurrencyvalueto.toUpperCase()}</button>
          </div>
        </div>
      </div>
          </form>
    </>
  );
}

export default App;
