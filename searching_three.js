var main = 0;

for (var main = 0; main < 1000; main += 100){
  var ddclass = 0;
  if (main){
    ddclass = main/100;
  }
//   console.log(ddclass);
  for (var div = 0; div < 100; div += 10){
    var dddiv = 0;
    if (div){
      dddiv = div/10
    }
//     console.log(ddclass+''+dddiv)
    for (var specific = 0; specific < 10; specific++){
//       console.log(ddclass+''+dddiv+''+specific)
    }
  }
}

var item = 110;

var findFast = function(item){
  var specific = 0;
  var itemSpecific = item % 10;
  
  while (specific < 10){
    if (specific){
      if (itemSpecific <= specific) {
        
        specific = 10;
      }
    }
    
    specific++;
  }
  
}

console.log(findFast(item))