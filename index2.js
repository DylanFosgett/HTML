
var input = function(){
var numbers = prompt("Please enter six numbers", "1, 2, 3, 4, 5, 6");
var newNums = numbers.split(',').map(function(item) {
  return parseInt(item, 10);

});
if(newNums != null){
  alert("Your numbers are " + newNums + " good job!")
}
}


var mean = function(){
alert("the mean is " + 3.5);
}

var median = function(){
 alert("the median is " + 3.5)
}

var mode = function(){
alert("the mode is " + NaN)

}
