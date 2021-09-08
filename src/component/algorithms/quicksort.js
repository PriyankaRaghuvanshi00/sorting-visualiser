let b = [];
function swap(items, leftIndex, rightIndex) {
   var temp = items[leftIndex];
   items[leftIndex] = items[rightIndex];
   items[rightIndex] = temp;
}
function partition(arr, low, high) {
   let pivot = arr[high], i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
   for (let j = low; j <= high - 1; j++) {
      b.push([j, high, false])
      if (arr[j] < pivot) {
         i++;
         swap(arr, i, j);
         b.push([i, j, true])
      }
   }
   swap(arr, i + 1, high);
   b.push([i + 1, high, true])
   return (i + 1);
}

function quickSort(arr, low, high) {
   if (low < high) {
      let pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
   }
}

function QuickSortHelper(items, left, right, setSwap) {
   setSwap(b);
  let  arr = [...items]
   quickSort(arr, left, right);
   console.log(b);
   console.log(arr);
}
export default QuickSortHelper;