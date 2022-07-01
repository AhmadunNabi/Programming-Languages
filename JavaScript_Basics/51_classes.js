// class = a blueprint for creating objects 
//         define what properties and methods they have 
//         use a constructor for unique properties.

class player {
    // score = 0; This line gives error here but no error in console.

    pause() {      // declaring a method into the class function keyword is not necessary
        console.log("You paused the game");
    }
    exit() {
        console.log("You exited the game")
    }
}

const player1 = new player();  // Create a object using class player
const player2 = new player();
const player3 = new player();
const player4 = new player();

// player1.score += 1;
console.log(player1);
player1.pause();