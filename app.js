'use strict';

var guestName = prompt('What is your name?');
alert('Hi '+ guestName + ', nice to meet you.');

//Question 1
var boneAns = prompt('Alright ' + guestName + ', have I ever broken a bone?').toLowerCase();

if (boneAns === 'y' || boneAns === 'yes'){
  alert('Correct! I have broken my collar bone during a Football scrimmage');
} else {
  alert('That is incorrect. I have broken my collar bone.');
}

//Question 2
var tattooAns = prompt('Do I have any tattoos?').toLowerCase();


if(tattooAns === 'n' || tattooAns === 'no'){
  alert('Correct! I have always thought about getting a tattoo of the outline of the island I grew up on, but I am very indecisive and have not gone through with it.');
} else {
  alert('Incorrect! Granted I have always thought about getting a tattoo of the outline of the island I grew up on, but I am very indecisive and have not gone through with it.');
}
//Question 3

var islandAns = prompt('Alright, now that you know that I grew up on an island my question is, what is the island\'s name?').toLowerCase();

if(islandAns === 'bainbridge island' || islandAns === 'bainbridge'){
  alert('Correct! My home is Bainbridge Island Washington! We don\'t have any palm trees but we do have plenty of strawberries! ');
} else {
  alert('That is the wrong Island! My home is Bainbridge Island Washington! We don\'t have any palm trees but we do have plenty of strawberries! ');
}

//Question 4
var lowesAns = prompt('Okay, now I recently quit my job at Lowe\'s. I was a specialist in what Department there?').toLowerCase();

if(lowesAns === 'flooring'){
  alert('That is correct! I was a flooring specialist at the Bellingham Lowe\'s store for the past year and a half. I had a great time helping customers with their special orders ');
} else {
  alert('Wrong department! But pretty close! My favorite departments were the Garden & Lumber departments for all the smells.');
}

//Question 5
var videogameAns = prompt('Finally, what is my favorite videogame franchise?').toLowerCase();

if(videogameAns === 'halo') {
  alert('That is astonishingly right! How\'d you get to know that?? But regardless Halo is such a great franchise from the music to the books, the Halo universe really is something else man.');
} else {
  alert('I don\'t know why I asked that, it is pretty specific. But regardless Halo is the best videogame franchise around, from the orchestral music to the books, the Halo franchise is the best. ');
};
