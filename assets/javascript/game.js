
//
// *********** SET UP *************
//

//possible words
var choices = ["zebra", "rhino", "elephant", "giraffe", "mom", "dad"];

//mystery word defined by random
var word = choices[Math.floor(choices.length * Math.random())
];

//global variables
var d;
dashArray = [];
var lettersGuessed;

//function generates a dashed line for every character in word
function dashLine() 
{
  for (var i = 0; i < word.length; i++) 
    {
    dashArray[i] = "_";
    }

    //create a string for display
    d = dashArray.join(" ");
    document.getElementById("answer").innerHTML = d;
}

//
//************ Game Begins **************
//

//function takes user inputs and checks to see if correct guess
function letter()
{
  //obtain letter that user types in
  var letter = document.getElementById("letter").value;

  //checking to make sure user input is an input
  if (letter.length > 0)
  {
    //loop to compare guess with letters in word
    for (var i = 0; i < word.length; i++) 
    {
      //conditional statement that reveals correct letter in the answer
      if (word[i] === letter)
      {
        dashArray[i] = letter;
      }
    }

    //takes new entries into array and combines
    //into single string with spaces for display
    d = dashArray.join(" ");
    //displays updated answer to screen
    document.getElementById("answer").innerHTML = d; 
    //takes new entries, without spaces, to compare to word
    lettersGuessed = dashArray.join("");
  }

  //used for trouble shooting
  console.log("the d: " + d);
  console.log("the word: " + word);
  console.log("the lettersGuessed: " + lettersGuessed);

  //when user gets word correct they get an elert
  
  if (lettersGuessed === word)
  {
    alert("You win!");
  }
  console.log(lettersGuessed === word); 
}


//function spilts word into array and used to see solution
function revealWord() 
{
  document.getElementById("word").innerHTML = word;
}

