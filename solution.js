function pairElement(str) {
  
    const matches = function(char){
    switch(char) {
      case "A" :
        return  ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  }

let ourArr = [];
  for(let i=0; i < str.length; i++){
    ourArr.push(matches(str[i]))
  }
  return ourArr;
  console.log(ourArr);
}

pairElement("GCG");
