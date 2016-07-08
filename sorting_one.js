var arr = [9, 6, 1, 5, 4, 7, 8, 3];

var sortFast = function(values, highst, lowst){
  var sorted = [];
  for (var i = 0; i < values.length; i++){
    if (values[i] != lowst && values[i] != highst){
      if (!sorted[0]){
        sorted.push(values[i])
      }
      else {
        count = 0;
        while (count < sorted.length){
          if (values[i] > sorted[count]){
            if (sorted[count+1]){
              if (values[i] < sorted[count+1]){
                console.log('greater than current, less than next')
                sorted.splice(count+1, 0, values[i])
                count = sorted.length;
              }              
            }
            else {
              console.log('greater then current and next')
              sorted.splice(count+2, 0, values[i])
              count = sorted.length;
            }
          } 
          else if (values[i] < sorted[count]){
            console.log('less than');
            console.log(values[i])
            console.log('sorted '+sorted[count])
            sorted.splice(count, 0, values[i])
            count = sorted.length;
          }
          count++;
        }
      }
    }
  }
  sorted.unshift(lowst);
  sorted.push(highst)
  return sorted
//   return [values, highst, lowst]
}

console.log(sortFast(arr, 9, 1))