var wrestlers = ['Shawn Michaels', 'Bret Hart', 'Stone Cold', 'The Rock'];
var randomWrestler = wrestlers[Math.floor(Math.random() * wrestlers.length)];

function listWrestlers() {
    for (var x = 0; x < wrestlers.length; x++) {
    console.log(wrestlers[x]);
    }
}

function selectWrestler() {
    if (randomWrestler === 'Shawn Michaels') {
    console.log("Shawn Michaels is the GOAT!");
    } else if (randomWrestler === 'Bret Hart') {
    console.log("Bret Hart is the best there is, was, and ever will be!");
    } else if (randomWrestler === 'Stone Cold') {
    console.log("Stone Cold is the GOAT, WHAT?");
    } else if (randomWrestler === 'The Rock') {
    console.log("The Rock is the GOAT!");
    } else {
    console.log('Tell me you did not just say that!');
    }
}

console.log('Here are the wrestlers we have presented:');
listWrestlers();
console.log('Which wrestler is the greatest of all time?');
selectWrestler();