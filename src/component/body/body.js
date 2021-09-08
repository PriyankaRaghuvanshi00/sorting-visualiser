import "./body.css"
import React, { createRef } from "react";
import { Component } from "react";
import heapsort from "../algorithms/heapsort";
import countsort from "../algorithms/countsort";
import radixsort from "../algorithms/radixsort"
import quicksort from "../algorithms/quicksort"
import bubblesort from "../algorithms/bubblesort";
import mergesort from "../algorithms/mergesort"

class Body extends Component {
   state = {
      sort: null,
      array: [],
      swap: [],
      completed: false,
      tym: this.props.tym,
      greentym: 2*this.props.tym,
      arrIsNumber: this.props.arrIsNumber,
   }
   setArr = (ar) => { this.setState({ array: ar }) }
   setSwap = (ar) => { this.setState({ swap: ar }) }
   setCompleted = (ar) => { this.setState({ completed: ar }) }
   animateAndSwap() {
      const swap = this.state.swap;
      let arr = [...this.state.array];
      for (var i = 0; i < this.state.swap.length; ++i) {
         const start = swap[i][0], end = swap[i][1], isSwap = swap[i][2], elem = document.getElementsByClassName("arraygrid")[0].childNodes
         const elem1 = elem[start], elem2 = elem[end];
         setTimeout(() => {
            elem1.style.backgroundColor = "red"
            elem2.style.backgroundColor = "red"
            elem1.style.color = "red"
            elem2.style.color = "red"
            if (isSwap) {
               if (!this.state.arrIsNumber) {
                  var temp = elem1.style.height;
                  elem1.style.height = elem2.style.height;
                  elem2.style.height = temp;
               }
               var t = arr[start];
               arr[start] = arr[end];
               arr[end] = t;
               if (this.state.arrIsNumber) {
                  this.setArr(arr);
               }
            }
         }, i * this.state.tym)
         setTimeout(() => {
            elem1.style.backgroundColor = "green"
            elem2.style.backgroundColor = "green"
            elem1.style.color = "green"
            elem2.style.color = "green"
         }, (i * this.state.tym + this.state.greentym));
      }
      setTimeout(() => {
         this.setCompleted(true);
         this.setArr(arr);
      }, (swap.length * this.state.tym))
   }

   animateAndReplace() {
      const swap = this.state.swap;
      let arr = [...this.state.array];
      console.log(swap);
      for (var i = 0; i < this.state.swap.length; ++i) {
         if (swap[i][0] >= 0 && swap[i][1] >= 0) {
            const start = swap[i][0], valueToReplace = swap[i][1], isSwap = swap[i][2], elem = document.getElementsByClassName("arraygrid")[0].childNodes
            const elem1 = elem[start];
            setTimeout(() => {
               elem1.style.backgroundColor = "red"
               elem1.style.color = "red"
               if (isSwap) {
                  if (!this.state.arrIsNumber) {
                     elem1.style.height = `${valueToReplace * 4}px`;
                  }
                  arr[start] = valueToReplace;
                  if (this.state.arrIsNumber) {
                     this.setArr(arr);
                  }
               }
            }, i * this.state.tym)

            setTimeout(() => {
               elem1.style.backgroundColor = "green"
               elem1.style.color = ""
            }, (i * this.state.tym + this.state.greentym));
         }
      }
      setTimeout(() => {
         this.setCompleted(true);
      }, (swap.length * this.state.tym))
   }

   sortType = async (sort) => {
      if (sort == "BubbleSort") {
         await bubblesort(this.state.array, this.setSwap);
         this.animateAndSwap();
      }
      else if (sort == "HeapSort") {
         await heapsort(this.state.array, this.state.array.length, this.setSwap);
         this.animateAndSwap();

      }
      else if (sort == "RadixSort") {
         await countsort(this.state.array, this.setSwap)
         this.animateAndReplace();

      }
      else if (sort == "MergeSort") {
         // await mergesort(this.state.array, this.setSwap, 0, this.state.array.length - 1);
         // this.animateAndSwap();
      }
      else if (sort == "QuickSort") {
         await quicksort(this.state.array, 0, this.state.array.length - 1, this.setSwap)
         this.animateAndSwap();
      }
      else if (sort == "CountSort") {
         await countsort(this.state.array, this.setSwap)
         this.animateAndReplace();
      }
   }
   componentWillMount() {
      this.setState({ sort: this.props.sort , array: this.props.arr })
   }
   componentDidMount() {
      this.sortType(this.state.sort);
   }
   render() {
      return (
            <div className="arraygrid" >
               {this.state.array.map((elem, index) => (
                  <div
                     key={index}
                     id={index}
                     style={{ margin: `${this.state.arrIsNumber ? '20px' : '2px'}`, height: `${this.state.arrIsNumber ? '0' : (elem * 4)}px`, backgroundColor: `${this.state.completed ? 'cornflowerblue' : 'null'}`, width: `${this.state.array.length <= 20 ? '4px' : this.state.array.length <= 50 ? '3px' : null}` }}
                     className="arrayelem"
                  >
                     {this.state.arrIsNumber ? elem : ''}
                  </div>
               ))
               }
            </div>
      );
   }
}

export default Body;