
function theBeatlesPlay(array) { 
  var arr =[]
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
    for (let i= 0; i <4; i++) {
      arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}


function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while(i < facts.length){
  	var string = facts[i] + "!!!";
  	newFacts.push(string);
  	i++;
  }
  return newFacts
}


function iLoveTheBeatles(num) {
   var love = []
   var i = num;
   function incrementVariable() {
    i = i + 1;
  }
  do {
    love.push("I love the Beatles!");
  }
  while (incrementVariable() < num);
  return love
}
