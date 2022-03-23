var numberofCount=parseInt(prompt("how many numbers u will enter"));
var array=[];
for(let i=0;i<numberofCount;i++){
    var a=parseInt(prompt("Enter number:"));
    array.push(a);
   
}
var sum=0;
for(let i=0;i<array.length;i++){
    sum+=array[i];
}
var average=sum/numberofCount

console.log(array);
console.log(sum)
console.log(average)
