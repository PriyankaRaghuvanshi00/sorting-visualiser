import React from "react";
import { useRef } from "react";
import "./inputArray.css"

const InputArr = ({ setInput, setInputData }) => {
   const input = useRef("")
   const Click = (event) => {
      event.preventDefault();
      let str = (input.current.value);
      let arr = str.split(',');
      let r = [];
      for (let i in arr) {
         if (arr[i].trim()) {
            r.push(parseInt(arr[i]));
         }
      }
      if (r) {
         setInputData(arr);
         setInput(false);
      }
      else {
         setInput(true);
      }
   }
   return (
      <form>
         <input ref={input} type="text" placeholder="Enter the elements separated by commas"></input>
         <button onClick={Click}>Submit</button>
      </form>
   );
}

export default InputArr;