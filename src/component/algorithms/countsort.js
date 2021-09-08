let b = [];
const countingSort = (inputArr, setSwap, n = inputArr.length) => {
   let k = Math.max(...inputArr);
   let t;
   const temp = new Array(k + 1).fill(0);
   for (let i = 0; i < n; i++) {
      t = inputArr[i];
      temp[t]++;
      b.push([i, t, false]);
   }
   for (let i = 1; i <= k; i++) {
      temp[i] = temp[i] + temp[i - 1];
   }
   const outputArr = new Array(n).fill(0);
   for (let i = n - 1; i >= 0; i--) {
      t = inputArr[i];
      outputArr[temp[t] - 1] = t;
      b.push([(temp[t] - 1), t, true]);
      temp[t] = temp[t] - 1;
   }
   setSwap(b);
   console.log(b)
   console.log(outputArr);

}

export default countingSort;