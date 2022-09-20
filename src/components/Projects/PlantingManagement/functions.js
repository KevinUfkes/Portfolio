export function getIndexByValue(arr, value){
    for(let x=0; x<arr.length; x++){
      if(arr[x] == value) return x;
    }
    return -1;
  }