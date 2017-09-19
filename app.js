'use strict';

var guestName = prompt('What is your name?');
alert('Hi '+ guestName + ', nice to meet you.');

//Question 1
var boneAns = prompt('Alright ' + guestName + ', have I ever broken a bone?');
boneAns.toLowerCase();
if (boneAns === 'y' || boneAns === 'yes'){
  alert('Correct! I have broken my collar bone during a Football scrimmage');
} else {
  alert('That is incorrect. I have broken my collar bone.');
}

//Question 2
var tattooAns = prompt('Do I have any tattoos?');
tattooAns.toLowerCase();
if(tattooAns === 'n' || tattooAns === 'no'){
  alert('Correct! I have always thought about getting a tattoo of the outline of the island I grew up on, but I am very indecisive and have not gone through with it.');
} else {
  alert('Incorrect! Granted I have always thought about getting a tattoo of the outline of the island I grew up on, but I am very indecisive and have not gone through with it.');
}
//Question 3

var islandAns = prompt('Alright, now that you know that I grew up on an island my question is, what is the island\'s name?');
islandAns.toLowerCase();

if(islandAns === 'bainbridge island' || islandAns === 'bainbridge'){
  alert('Correct! My home is Bainbridge Island Washington! We don\'t have any palm trees but we do have plenty of strawberries! ');
} else {
  alert('That is the wrong Island! My home is Bainbridge Island Washington! We don\'t have any palm trees but we do have plenty of strawberries! ')
}

//Question 4
//Question 5
