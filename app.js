'use strict';

var score = 0;

var guestName = prompt('What is your name?');
console.log('User\'s name is ' + guestName);

alert('Hi ' + guestName + ', nice to meet you.');

//Question 1
var question1 = prompt('Alright ' + guestName + ', have I ever broken a bone?').toLowerCase();

if ( question1 === 'y' || question1 === 'yes'){
  alert('Correct! I have broken my collar bone during a Football scrimmage');
  score++;
} else {
  alert('That is incorrect. I have broken my collar bone.');
}
console.log('Question 1 was, \n Have I ever broken a bone? \n User\'s input : ' + question1 + '\n Correct answer: yes');

//Question 2
var question2 = prompt('Do I have any tattoos?').toLowerCase();

if(question2 === 'n' || question2 === 'no'){
  alert('Correct! I have always thought about getting a tattoo of the outline of the island I grew up on, but I am very indecisive and have not gone through with it.');
  score++;
} else {
  alert('Incorrect! Granted I have always thought about getting a tattoo of the outline of the island I grew up on, but I am very indecisive and have not gone through with it.');
}
console.log('Question 2 was, \n Do I have any tattoos? \n User\'s input : ' + question2 + '\n Correct answer: no');
//Question 3

var question3 = prompt('Alright, now that you know that I grew up on an island my question is, what is the island\'s name?').toLowerCase();

if(question3 === 'bainbridge island' || question3 === 'bainbridge'){
  alert('Correct! My home is Bainbridge Island Washington! We don\'t have any palm trees but we do have plenty of strawberries! ');
  score++;
} else {
  alert('That is the wrong Island! My home is Bainbridge Island Washington! We don\'t have any palm trees but we do have plenty of strawberries! ');
}
console.log('Question 3 was, \n What Island did I grow up on? \n User\'s input : ' + question3 + '\n Correct answer: bainbridge');
//Question 4
var question4 = prompt('Okay, now I recently quit my job at Lowe\'s. I was a specialist in what Department there?').toLowerCase();

if(question4 === 'flooring'){
  alert('That is correct! I was a flooring specialist at the Bellingham Lowe\'s store for the past year and a half. I had a great time helping customers with their special orders ');
  score++;
} else {
  alert('Wrong department! But pretty close! My favorite departments were the Garden & Lumber departments for all the smells.');
}
console.log('Question 4 was, \n I was a specialist in which department at Lowe\'s? \n User\'s input : ' + question4 + '\n Correct answer: flooring');
//Question 5
var question5 = prompt('Finally, what is my favorite videogame franchise?').toLowerCase();

if(question5 === 'halo') {
  alert('That is astonishingly right! How\'d you get to know that?? But regardless Halo is such a great franchise from the music to the books, the Halo universe really is something else man.');
  score++;
} else {
  alert('I don\'t know why I asked that, it is pretty specific. But regardless Halo is the best videogame franchise around, from the orchestral music to the books, the Halo franchise is the best. ');
};
console.log('Question 5 was, \n What is my favorite videogame franchise? \n User\'s input : ' + question5 + '\n Correct answer: halo');
//Question 6
alert('Alright ' + guestName + ', I have a guessing game for you. And I\'ll give you 4 guesses!');

for (var i = 1 ; i <= 4 ; i++){
  var commuteGuess = prompt('How long does my commute in the morning take? This is guess ' + i);
  console.log('Question was, \n How long does my commute in the morning take? \n User\'s input : ' + commuteGuess + '\n Correct answer: 115-120 \n This was attempt ' + i);
  if (commuteGuess === 117) {
    score++;
    alert('You got that spot on! It does take me 117 minutes from the first walk to my house to the final walk into CodeFellows (today at least). That took you ' + i + ' guesses.');
    break;
  }else if(commuteGuess >= 115 && commuteGuess <= 120 && commuteGuess != 117){
    score++;
    alert('That is close enough! It takes me around 115-120 minutes to make it from the first step out of my house to the last step into CodeFellows. That took you ' + i + ' guesses!');
    break;
  }else if(commuteGuess >= 95 && commuteGuess < 115){
    alert('Not quite! That is about how many mintues it takes for me to get off of the ferry and onto the final bus! Try guessing higher!');
    if(i === 4){
      alert('Oh no! You\'ve used all of your guesses! The correct answer is somewhere between 115 and 120! Thank you for playing!');
      break;
    }
  }else if(commuteGuess >= 50 && commuteGuess < 95){
    alert('Note Quite! That is about how many mintues it takes for me to get off the ferry in Seattle! Try guessing higher!');
    if(i === 4){
      alert('Oh no! You\'ve used all of your guesses! The correct answer is somewhere between 115 and 120! Thank you for playing!');
      break;
    }
  }else if(commuteGuess >= 10 && commuteGuess < 50){
    alert('Not Quite! That is about how many minutes it takes for me to get on the ferry from the first bus! Try guessing higher!');
    if(i === 4){
      alert('Oh no! You\'ve used all of your guesses! The correct answer is somewhere between 115 and 120! Thank you for playing!');
      break;
    }
  }else if(commuteGuess >= 0 && commuteGuess < 10){
    alert('Not Quite! That would be awesome if it was but unfortunately it is not. Try guessing a lot higher!');
    if(i === 4){
      alert('Oh no! You\'ve used all of your guesses! The correct answer is somewhere between 115 and 120! Thank you for playing!');
      break;
    }
  }else if(commuteGuess > 120){
    alert('Not Quite! That guess is too high. Try guessing lower!');
    if(i === 4){
      alert('Oh no! You\'ve used all of your guesses! The correct answer is somewhere between 115 and 120! Thank you for playing!');
      break;
    }
  }else if(commuteGuess < 0){
    alert('Well considering I don\'t live here I doubt I could make a negative commute here. Try guessing a lot higher!');
    if(i === 4){
      alert('Oh no! You\'ve used all of your guesses! The correct answer is somewhere between 115 and 120! Thank you for playing!');
      break;
    }
  }else {
    alert('I did not quite understand what you input.');
    if(i === 4){
      alert('Oh no! You\'ve used all of your guesses! The correct answer is somewhere between 115 and 120! Thank you for playing!');
      break;
    }
  };
};

//Question 7
var schoolArray = ['WWU', 'UW', 'WSU', 'CWU', 'EWU', 'GU', 'UPS' ];
alert('Alright ' + guestName + ', I have one final game for you! You\'ll get 6 guesses!');
for (var j = 1; j <= 6; j++){
  var schoolGuess = prompt('What major University in Washington did I attend? (For example, if you guessed Arizona State University, you would type ASU) \n This is guess ' + j).toUpperCase();
  console.log('Question was, \n What major University in Washington did I attend? \n User\'s input : ' + schoolGuess + '\n Correct answer : wwu \n This was attempt : ' + j);
  if(schoolGuess === schoolArray[0]){
    alert('Congratulations! That is correct! and concludes my constant stream of questions! Go Vikings! You got that on guess ' + j);
    score++;
    alert('All the possible answers were \n' + schoolArray);
    break;
  }else if(schoolGuess === schoolArray[1]){
    alert('University of Washington is a great school but not the correct one!');
    if(j === 6){
      alert('Oh no! You\'ve used up your 6 guesses. All the possible answers were \n' + schoolArray + '\n Thank you for playing!');
      break;
    }
  }else if(schoolGuess === schoolArray[2]){
    alert('Washington State University is a great school but not the correct one!');
    if(j === 6){
      alert('Oh no! You\'ve used up your 6 guesses. All the possible answers were \n' + schoolArray + '\n Thank you for playing!');
      break;
    }
  }else if(schoolGuess === schoolArray[3]){
    alert('Central Washington University is a great school but not the correct one!');
    if(j === 6){
      alert('Oh no! You\'ve used up your 6 guesses. All the possible answers were \n' + schoolArray + '\n Thank you for playing!');
      break;
    }
  }else if(schoolGuess === schoolArray[4]){
    alert('Eastern Washington University is a great school but not the correct one!');
    if(j === 6){
      alert('Oh no! You\'ve used up your 6 guesses. All the possible answers were \n' + schoolArray + '\n Thank you for playing!');
      break;
    }
  }else if(schoolGuess === schoolArray[5]){
    alert('Gonzaga University is a great school but not the correct one!');
    if(j === 6){
      alert('Oh no! You\'ve used up your 6 guesses. All the possible answers were \n' + schoolArray + '\n Thank you for playing!');
      break;
    }
  }else if(schoolGuess === schoolArray[6]){
    alert('University of Puget Sound is a great school but not the correct one!');
    if(j === 6){
      alert('Oh no! You\'ve used up your 6 guesses. All the possible answers were \n' + schoolArray + '\n Thank you for playing!');
      break;
    };
  };
};

alert('You got ' + score + ' out of 7 questions correct!');
