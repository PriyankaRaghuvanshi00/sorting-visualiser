let b=[];
const maxHeapify = (arr, n, i) => {
   let largest = i;
   let l = 2 * i + 1;
   let r = 2 * i + 2;
   if (l < n && arr[l] > arr[largest]) {
      largest = l;
   }
   if (r < n && arr[r] > arr[largest]) {
      largest = r;
   }
   if (largest != i) {
      b.push([i,largest,true])
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      maxHeapify(arr, n, largest);
   }
}
const Heapsort = (item, n, setSwap) => {
   let arr = [...item]
   for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
      maxHeapify(arr, n, i);
   }
   for (let i = n - 1; i >= 0; i--) {
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      b.push([i,0,true])
      maxHeapify(arr, i, 0);
   }
   console.log(arr);
   setSwap(b);
}

export default Heapsort;