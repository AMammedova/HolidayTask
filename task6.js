var stringarray=[];
var countofString=parseInt(prompt("How many words you will enter"));
for(let i=0;i<countofString;i++){
    var word=prompt("Enter word");
    stringarray.push(word);
}
function reverseArray(){
    return stringarray.reverse();
}
console.log(reverseArray())