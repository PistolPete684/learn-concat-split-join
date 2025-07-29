function splitAndMerge(string, separator) {
  
  // split the words into an array
  let words = string.split(" ");
  let result = [];
  
  
 for ( let i = 0; i < words.length; i++) {
   // split wors into characters
   let char = words[i].split("");
   // join characters with separator provided
   let joined = char.join(separator);
   // push the transformed word to reult array
   result.push(joined);
 }
  
  // join all transformed words into a sentence
  return result.join(" ");
}

// code wars alternative

// function splitAndMerge(str, sp) {
//   return str.split(" ").map(word => word.split("").join(sp)).join(" ");
// }