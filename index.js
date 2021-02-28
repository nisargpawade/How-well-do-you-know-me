 var readlineSync = require('readline-sync');
 var chalk = require('chalk');

 var score = 0;

function ask(question, answer) {
  userAnswer = readlineSync.question(chalk.cyanBright(question))
  console.log(chalk.cyanBright('You answered: ' + userAnswer))
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green('You are right!'))
    score++
  } else {
    console.log(chalk.redBright('You are wrong!'))
    score--
  }
  console.log(chalk.yellowBright('Your current score is: ' + score))
  console.log(chalk.bold.yellow('__________________________________________________________________\n  '))
}

var one = {
  que : 'what is my first name? ',
  ans : 'nisarg',
}

var two = {
  que : 'Where do I live (Town)? ',
  ans : 'wani',
}

var three = {
  que : 'Which course of SPI do I belong to? (number) ',
  ans : '41',
}

var four = {
  que : 'What was I willing to join?\na.IIT Powai\nb.VNIT\nc.NDA\nd.COEP\n[Enter Option(a,b,c or d)] ',
  ans : 'c',
}

var five = {
  que : 'What is better Pune or Vidarbha? ',
  ans : 'Vidarbha',
}

var quizList = [one.que, one.ans , two.que, two.ans, three.que, three.ans, four.que, four.ans, five.que, five.ans]

for ( i=0; i < quizList.length ; i = i + 2)
  ask(quizList[i], quizList[i + 1])

console.log(chalk.bgBlue('Your total score is ' + score))

// var scoreList = {'Nisarg' : 5}

// console.log('Highscores: ' + scoreList)