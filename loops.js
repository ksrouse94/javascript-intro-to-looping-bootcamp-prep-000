function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i == 1) {
      array[i] = [`I am ${i} strange loop.`];
    } else {
      array[i] = [`I am ${i} strange loops.`];
    }
  }
  return array
}

function whileLoop(n){
  while(n > 0){
    console.log(n--);
  }
  return "done"
}

function doWhileLoop(array){
  function incrementVariable() {
      var i = i + 1;
  }
  do{
    var i = 0;
    array.slice(i);
  }while(array.length > 0 && incrementVariable());
  return array
}
