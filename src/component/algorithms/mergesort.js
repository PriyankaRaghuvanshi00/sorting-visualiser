function MergeSort(array, setSwap, l, r) {
  if (l < r) {
    let mid = array.left / 2;
    MergeSort(array, setSwap, 0, mid)
    MergeSort(array, setSwap, l, mid + 1,r);
    merge(array, l, mid, r, setSwap);
  }
}

function merge(array, l, mid, n, setSwap) {
  let i = l, j = mid + 1, k = l, temp = [], b = [], a = [];
  while (i <= mid && j <= n) {
    if (array[i] < array[j]) {
      temp[k++] = array[i++];

    }
    else {
      temp[k++] = array[j++];
    }
  }
  while (i <= mid) {
    temp[k++] = array[i++]
  }
  while (j <= n)
    temp[k++] = array[j++]
  setSwap(b);
  console.log(b);
}


export default MergeSort;