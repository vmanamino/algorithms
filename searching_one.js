var shares = [128, 97, 121, 123, 98, 97, 105];
var gain = 0;
var loss = 0;
for (var i = 0; i < shares.length; i++){
  if (i%2){
    console.log('sell day '+i)
    console.log(shares[i])
    if (loss){
      if (loss > shares[i]){
        loss = loss - shares[i];
      }
      else {
        gain = shares[i] - loss        
      }      
    }
    else {
      gain = shares[i]
    }
    console.log('loss is '+ loss);
    console.log('gain is '+ gain)
  }
  else {      
    console.log('purchase day '+i)
    console.log(shares[i])
    loss += shares[i]
    console.log('loss is '+loss)
  }
}

console.log('gain '+gain);
console.log('loss ' +loss);
