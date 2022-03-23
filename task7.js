var stringarray=[];
var stringarray1=[];
var likeArray=[];
var countofString=parseInt(prompt("How many words you will enter"));
var countofString1=parseInt(prompt("How many words second time you will enter"));
for(let i=0;i<countofString;i++){
    var word=prompt("Enter word");
    stringarray.push(word);
}
for(let i=0;i<countofString1;i++){
    var word1=prompt("Enter second string's word");
    stringarray1.push(word1);
}
function GetLikeArray(){
    for(let i=0;i<stringarray.length;i++){
        for(let j=0;j<stringarray1.length;j++){
            if(stringarray[i]==stringarray1[j]){
                likeArray.push(stringarray[i])
            }
        }
    }
    return likeArray
}

console.log(GetLikeArray())