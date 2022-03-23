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
var maxzimizearray=[];
var average=sum/numberofCount
for(let i=0;i<array.length;i++){
    if(array[i]>average){
        maxzimizearray.push(array[i]);
    }
}
console.log(average)
console.log(maxzimizearray)