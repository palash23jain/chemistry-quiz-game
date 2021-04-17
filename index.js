let quesAns = [{
    quest: "Question 1) Which is the most abundant gas in the earth's atmosphere?",
    ans: "nitrogen"
  }, {
    quest: "Question 2) Which gas evolved from  paddy fields and marshes?",
    ans: "methane"
  },
  {
    quest: "Question 3) Which is the purest form of carbon?",
    ans: "graphite"
  },
  {
    quest: "Question 4) Which polymer is used to manufacture electric switches, computer disks etc.?",
    ans: "bakelite"
  },
  {
    quest: "Question 5) Which element is a liquid at ordinary temperature?",
    ans: "mercury"
  },
  {
    quest: "Question 6) Which element is excreted through human sweat?",
    ans: "sulphur"
  },
  ]
  let readInput = require("readline-sync");
  let input, score=0;
  function quizGame(q) {
    for(let i=0; i<q.length; i++){
      input = (readInput.question(q[i].quest));
      if(input===q[i].ans){
        console.log("Correct Answer!!!");
        ++score;
      }
      else{
        --score;
        console.log("Wrong Answer!!!")
      }
    }
    console.log("Your final score:"+score);
  }
  let contestant = readInput.question("What is your name? ")
  console.log("Hello "+contestant);
  console.log("Welcome to the Chemistry quiz game. Please answer the questions in all small letters. You get +1 for correct answer and -1 for incorrect answer")
  quizGame(quesAns);