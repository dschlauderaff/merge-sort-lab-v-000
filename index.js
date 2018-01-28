
function findMinAndRemoveSorted(array) {
  // mergeSort(array)
  return array.shift(0)
  
}

// function mergeSort(array) {
//   let midpoint = array.length/2
//   let firstHalf = array.slice(0, midpoint)
//   let secondHalf = array.slice(midpoint, array.length)
//   return merge(mergeSort(firstHalf), mergeSort(secondHalf))
// }

function merge(firstHalf, secondHalf) {
  let sorted = []
  let currentMin
  while(firstHalf.length != 0 && secondHalf.length != 0) {
    let currentMin 
  }
}