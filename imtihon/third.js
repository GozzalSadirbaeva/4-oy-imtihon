const replaceCharacter = "redece";
const strToArray = (str)=>{

 return str.split("").map((currentString, index, arr) =>{
  return  arr.indexOf(currentString) == arr.lastIndexOf(currentString) ? "(" : ")"
 }).join("")
}
console.log(strToArray(replaceCharacter));

