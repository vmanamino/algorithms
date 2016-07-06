// for (var main = 0; main < 1000; main += 100){
//   var ddclass = 0;
//   if (main){
//     ddclass = main/100;
//   }
  
// }

var item = 212;



var checkFast = function(item){
  console.log('item')
  console.log(item) 
  ddclass = 0;
  if (item == 100){
    console.log('found')
  }  
  else {
    var specific = 0;
    console.log('modulo')
    console.log(item%10)
    var itemSpecific = item % 10;
    console.log(itemSpecific+'item spec')
    ddclass = item - (item % 100)    
    var dddiv = (item % 100) - ((item % 100) % 10) 
    var main = 0;
    var div = 0;
    if (item > 100){     
      while (main < 1000){
        if (ddclass == main){
          main = 1000;
        }
        main += 100
      }
    }
    if (item > 100 || item < 100){
      while (div < 100){
        if (dddiv == div){
          console.log(div)
          div = 100;
        }
        div += 10;
      }
      while (specific < 10){
        if (itemSpecific == specific){
          console.log(itemSpecific)
          specific = 10;
        }
        specific++;
      }
    }     
  }
  
  return (ddclass/100)+''+(dddiv/10)+''+itemSpecific;
}

console.log(checkFast(item))