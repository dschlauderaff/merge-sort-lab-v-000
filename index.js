
function findMinAndRemoveSorted(array) {
  mergeSort(array)
  
  
}

function mergeSort(array) {
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}