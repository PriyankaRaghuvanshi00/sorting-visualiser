import "./header.css"
import React, { useEffect, useState } from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import Refresh from "@material-ui/icons/Refresh";

const Header = ({ sort, input }) => {
   const Refresh = () => {
      window.location.reload();
   }
   const sortname = ["BubbleSort", "HeapSort", "QuickSort", "CountSort", "RadixSort"]
   return (
      <header>
         {sortname.map(item => <h3 id={item} onClick={sort.bind(null, item)}>{item}</h3>)}
         <RefreshIcon className="icon" onClick={Refresh} />
         <div className="icon" onClick={() => { input(true) }} >Input Array</div>
      </header>
   );
}

export default Header;