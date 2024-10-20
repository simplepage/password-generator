


let UC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LC='abcdefghijklmnopqrstuvwxyz';
let NO="0123456789";
let SY="!@#$%^&*().";

import { RxCopy } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useState} from 'react';
const App = () => {

  const [uppercase,setUppercase] = useState(false);
  const [lowercase,setLowercase] = useState(false);
  const [number,setNumber] = useState(false);
  const [symbol,setSymbol] = useState(false);

  const [passlen,setPasslen] = useState(10);
  const [fPass,setFpass] = useState("");

  const handleClick = () => {

      let charSet="";
      let finalPass="";
      if(uppercase || lowercase || number || symbol){
         if(uppercase){charSet+=UC;}
         if(lowercase){charSet+=LC;}
         if(number){charSet+=NO;}
         if(symbol){charSet+=SY;}
        //  console.log(charSet);
        for(var i=0;i<passlen;i++){
          finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length));
        }
        setFpass(finalPass);
    }
    else{
      toast.error("Please select check box...");
    }
  }

  const handleCopy = () => {
    if(fPass==""){
      toast.error("Password box is empty...");
    }
    else{
       navigator.clipboard.writeText(fPass);
      toast.success("successfully copied...");
    }
  }

  return (
    <>
    <ToastContainer />
      <p className="heading">Password Generator</p>
      <div className="main">

        <div className="paragraph">
          <p className="feature">Feature in this Password Generetor : -</p>
          <ul>
            <li><u>Password Generation:  </u>
              Allows users to generate a password based on selected criteria (uppercase letter,lowercase letter,numbers and symbols).
            </li>
            <li><u>Password Length control:  </u>User can specify the length of the password.</li>
            <li><u>Password Display:  </u>Displayed the generated password in a box after clicking the Generate Password button.</li>
            <li><u>Copy Password:  </u>Allow users to copy the generated password.</li>
          </ul>
        </div>
        <div className="passgen">

          {/* input box */}
          <div className="p1">
            <input type="text" value={fPass} readOnly/>
            <button className="btn1" onClick={handleCopy}><RxCopy /></button>
          </div>

          {/* password length */}
          <div className="p2">
            <label>Password length:</label>
            <input type="number" min={10} max={20} value={passlen} onChange={(event)=>setPasslen(event.target.value)}/>
          </div>
          {/* uppercase */}
          <div className="p2">
            <label>Include Uppercase</label>
            <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
          </div>
          {/* lowercase */}
          <div className="p2">
            <label>Include Lowercase</label>
            <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
          </div>
          {/* number */}
          <div className="p2">
            <label>Include Numbers</label>
            <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}/>
          </div>
          {/* symbols */}
          <div className="p2">
            <label>Include Symbols</label>
            <input type="checkbox" checked={symbol} onChange={()=>setSymbol(!symbol)}/>
          </div>
          {/* button */}
          <div className="genpass">
            <button className="btn2" onClick={handleClick}>Generate Password</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
