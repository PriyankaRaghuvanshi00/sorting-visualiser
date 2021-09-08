function BubbleSort(arr, setArrswap) {
   let l = arr.length;
   if (l === 0)
      return;
   else {
      let temp = [...arr];
      const b = [];
      for (let i = 0; i < l - 1; ++i) {
         for (let j = 0; j < l - i - 1; ++j) {
            let a = [];
            a.push(j)
            a.push(j + 1)
            if (temp[j] > temp[j + 1]) {
               let t = temp[j + 1];
               temp[j + 1] = temp[j];
               temp[j] = t;
              a.push(true);
            }
            else{
               a.push(false);
            }
            b.push(a);
         }
         let com = []
         for (let k = l; k >= l - i - 1; k--) {
            com.push(k);
         }
      }
      console.log(temp);
      setArrswap([...b])
   }
}
export default BubbleSort;