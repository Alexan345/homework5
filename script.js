let bgColor  = 'gold';
let txtString = 'The United States Declaration of Independence is the pronouncement adopted by the Second Continental Congress meeting in Philadelphia, Pennsylvania, on July 4, 1776. The Declaration explained why the Thirteen Colonies at war with the Kingdom of Great Britain regarded themselves as thirteen independent sovereign states, no longer under British rule. With the Declaration, these new states took a collective first step toward forming the United States of America. The declaration was signed by representatives from New Hampshire, Massachusetts Bay, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Maryland, Delaware, Virginia, North Carolina, South Carolina, and Georgia.';

function myParagraph(bgColor, txtString) {
let parag = document.querySelector('#text');
parag.style.backgroundColor = bgColor;
parag.innerHTML = txtString;
}

myParagraph(bgColor,  txtString); 
