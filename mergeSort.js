function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;

  // Split
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // finish all recursions for this first before going down 1st: [3] 2nd: [9]
  const right = mergeSort(arr.slice(mid)); // finish all recursions for this first before going down 1st: [10]

  // Merge (inside same function)
  let merged = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    merged.push(left[i] <= right[j] ? left[i++] : right[j++]); // 1st: merged[9] 2nd: merged[3]
  }

  // Append remaining items                                     // slice(0) copies the whole array
  return merged.concat(left.slice(i)).concat(right.slice(j)); // 1st: merged[9, 10] 2nd: merged[3, 9, 10]
}

mergeSort([3, 9, 10, 27, 38, 43, 82]);
