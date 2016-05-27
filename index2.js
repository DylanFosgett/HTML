
var myFunction = function(){
alert("Hello!");
}

var input = function(){
var numbers = prompt("Please enter six numbers", "1, 2, 3, 4, 5, 6");
var newNums = numbers.split(',').map(function(item) {
  return parseInt(item, 10);

});
if(numbers != null){
  alert("Your numbers are " + newNums + "! good job!")
}
}


var mean = function(){
alert("the mean is " + numbers)

}
