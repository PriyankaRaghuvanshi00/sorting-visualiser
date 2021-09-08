import { useEffect, useRef, useState } from 'react';
import './App.css';
import Body from './component/body/body';
import Header from './component/header/header';
import Modal from './component/model/model';
import Input from './component/inputArray/inputArray';

function App() {
  var width = parseInt((window.innerWidth) / 12);
  const [array, setarray] = useState([])
  const [sortName, setsortName] = useState("");
  const [allGood, setallGood] = useState(false);
  const [Isnumber, setIsnumber] = useState(false)
  const [input, setinput] = useState(false)
  const [inputdata, setinputdata] = useState([])
  const [slider, setslider] = useState(100)
  const [arraysize, setarraysize] = useState(width)
  let arr = [];
  const Sortchoosen = (name) => {
    if (name == "" && slider == 10) {
      alert("choose")
      setallGood(false);
    }
    else {
      setsortName(name);
      setallGood(true);
    }
  }
  useEffect(() => {
    if (inputdata.length > 0) {
      setarray(inputdata)
      setIsnumber(true);
    }
    else {
      setIsnumber(false);
      for (var i = 0; i < arraysize; ++i) {
        var elem = Math.round((Math.random() * 100) + 1);
        arr.push(elem);
      }
      setarray(arr);
    }
    console.log(arr);
  }, [input, inputdata, slider, arraysize])

  return (
    <div className="app">
      <Header sort={Sortchoosen} input={setinput}></Header>
      <div className="extra-func">
        <div className="speed">
          <h1>Speed: {slider} ms</h1>
          <div className="inside-extra">
            <div className="speed-fast">Fast</div>
            <input type="range" disabled={allGood} onChange={() => { setslider(document.getElementsByClassName("slider")[0].value) }} value={slider} max="500" min="10" className="slider" />
            <div className="speed-slow">Slow</div>
          </div>
        </div>
        <div className="array-size">
          <h1>Array Size: {arraysize}</h1>
          <div className="inside-extra">
            <div className="speed-fast">Less</div>
            <input type="range" disabled={allGood} onChange={() => { setarraysize(document.getElementsByClassName("array-size-slider")[0].value) }} value={arraysize} max={width} min="10" className="array-size-slider" />
            <div className="speed-slow">More</div>
          </div>
        </div>
      </div>
      {input ? <Modal><Input setInput={setinput} setInputData={setinputdata}></Input></Modal> : allGood ? <Body sort={sortName} arrIsNumber={Isnumber} arr={array} tym={slider}></Body> : <Modal><h2>Please Select a Sort and You can also set array size and speed.</h2></Modal>}
     
      <div className="ToolTip">
        <div className="field">
        </div>
        <div className="field">
          <div style={{ backgroundColor: "rgb(25, 52, 102)" }} className="block">
          </div>
          <p> No Operation Takes Place </p>
        </div>
        <div className="field">
          <div style={{ backgroundColor: "red" }} className="block">
          </div>
          <p> Swaping  taking place</p>
        </div>
        <div className="field">
          <div style={{ backgroundColor: "green" }} className="block">
          </div>
          <p> Operation Done </p>
        </div>
        <div className="field">
          <div style={{ backgroundColor: "cornflowerblue" }} className="block">
          </div>
          <div style={{ backgroundColor: "green" }} className="block">
          </div>
          <p> Sorted Elements </p>
        </div>
      </div>
      <div className="note">
      To Set Another Sorting Algorithm or input please reset first
      </div>
    </div>
  );
}

export default App;
