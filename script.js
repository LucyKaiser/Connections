import Game from './game.js';

let id = window.location.href
id = id.split("?id=").pop()
console.log("id ==> ", id);


const puzzleListObject = {
    "1": {
        name: "Stem Staff",
        author: "Lucy",
        difficulty: "3",
        initialBoardState: {
            r1c1: "WILLIAMS", r2c1: "HA", r3c1: "CURRAN", r4c1: "ROBINSON",
            r1c2: "JACOB", r2c2: "SEARS", r3c2: "POTTS", r4c2: "PAUL",
            r1c3: "HARRIS", r2c3: "BONE", r3c3: "CARTER", r4c3: "BHANDARI",
            r1c4: "SHORES", r2c4: "HILL", r3c4: "FISHER", r4c4: "CHEN"
        },
        solutionGroups: {
            yellow: { yellow1: "CURRAN", yellow2: "FISHER", yellow3: "HA", yellow4: "SEARS" }, yellowDescription: "ADMINISTRATORS",
            green: { green1: "BHANDARI", green2: "CHEN", green3: "HARRIS", green4: "ROBINSON" }, greenDescription: "LANGUAGE TEACHERS",
            blue: { blue1: "BONE", blue2: "HILL", blue3: "POTTS", blue4: "SHORES" }, blueDescription: "LAST NAMES THAT ARE ALSO NOUNS",
            purple: { purple1: "CARTER", purple2: "JACOB", purple3: "PAUL", purple4: "WILLIAMS" }, purpleDescription: "LAST NAMES THAT COULD BE FIRST NAMES"
        }
    },
    "2": {
        name: "Puzzle 2",
        author: "Lucy",
        difficulty: "1",
        initialBoardState: {
            r1c1: "1", r2c1: "2", r3c1: "3", r4c1: "4",
            r1c2: "5", r2c2: "6", r3c2: "7", r4c2: "8",
            r1c3: "9", r2c3: "10", r3c3: "11", r4c3: "12",
            r1c4: "13", r2c4: "14", r3c4: "15", r4c4: "16"
        },
        solutionGroups: {
            yellow: { yellow1: "1", yellow2: "2", yellow3: "3", yellow4: "4" }, yellowDescription: "yellow",
            green: { green1: "5", green2: "6", green3: "7", green4: "8" }, greenDescription: "green",
            blue: { blue1: "9", blue2: "10", blue3: "11", blue4: "12" }, blueDescription: "blue",
            purple: { purple1: "13", purple2: "14", purple3: "15", purple4: "16" }, purpleDescription: "purple"
        }
    },
    "3": {
        name: "Puzzle 3",
        author: "Lucy",
        difficulty: "1",
        initialBoardState: {
            r1c1: "1", r2c1: "2", r3c1: "3", r4c1: "4",
            r1c2: "5", r2c2: "6", r3c2: "7", r4c2: "8",
            r1c3: "9", r2c3: "10", r3c3: "11", r4c3: "12",
            r1c4: "13", r2c4: "14", r3c4: "15", r4c4: "16"
        },
        solutionGroups: {
            yellow: { yellow1: "1", yellow2: "2", yellow3: "3", yellow4: "4" }, yellowDescription: "yellow",
            green: { green1: "5", green2: "6", green3: "7", green4: "8" }, greenDescription: "green",
            blue: { blue1: "9", blue2: "10", blue3: "11", blue4: "12" }, blueDescription: "blue",
            purple: { purple1: "13", purple2: "14", purple3: "15", purple4: "16" }, purpleDescription: "purple"
        }
    },
    "4": {
        name: "Puzzle 4",
        author: "Lucy",
        difficulty: "1",
        initialBoardState: {
            r1c1: "1", r2c1: "2", r3c1: "3", r4c1: "4",
            r1c2: "5", r2c2: "6", r3c2: "7", r4c2: "8",
            r1c3: "9", r2c3: "10", r3c3: "11", r4c3: "12",
            r1c4: "13", r2c4: "14", r3c4: "15", r4c4: "16"
        },
        solutionGroups: {
            yellow: { yellow1: "1", yellow2: "2", yellow3: "3", yellow4: "4" }, yellowDescription: "yellow",
            green: { green1: "5", green2: "6", green3: "7", green4: "8" }, greenDescription: "green",
            blue: { blue1: "9", blue2: "10", blue3: "11", blue4: "12" }, blueDescription: "blue",
            purple: { purple1: "13", purple2: "14", purple3: "15", purple4: "16" }, purpleDescription: "purple"
        }
    }
};


window.currentGame = null

function initializeGame(id) {
    let gameConfig = puzzleListObject[id]
    window.currentGame = new Game(gameConfig.name, gameConfig.author, gameConfig.difficulty, gameConfig.initialBoardState, gameConfig.solutionGroups)
    window.currentGame.initializeBoard()
}

// Source - https://stackoverflow.com/a/494348
// Posted by Crescent Fresh, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-08, License - CC BY-SA 4.0

function createElementFromHTML(htmlString) {
  var a = document.createElement('a');
  a.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return a.firstChild;
}


function setPuzzleList() {
    let wrapper = document.getElementById("listWrapper")
    for (let x = 1; x <= Object.keys(puzzleListObject).length; x++) {
        const templateString = `<a href="/game.html?id=[ID]" class="puzzleLink">[PUZZLENAME] by [PUZZLEAUTHOR]. Difficulty [DIFFICULTY]/5</a>`
        let constructedString = templateString
        constructedString = constructedString.replace("[ID]", x)
        constructedString = constructedString.replace("[PUZZLENAME]", puzzleListObject[x].name)
        constructedString = constructedString.replace("[PUZZLEAUTHOR]", puzzleListObject[x].author)
        constructedString = constructedString.replace("[PUZZLENAME]", puzzleListObject[x].name)
        constructedString = constructedString.replace("[DIFFICULTY]", puzzleListObject[x].difficulty)
        console.log(createElementFromHTML(constructedString));
        wrapper.appendChild(createElementFromHTML(constructedString))

    }
}

document.addEventListener("DOMContentLoaded", () => {
    try {initializeGame(id)} catch {}
    if (document.getElementById("listWrapper")) {
        setPuzzleList()
    }
})


// let game = new Game("Puzzle 1", "Lucy", {r1c1:"1", r2c1:"2", r3c1:"3", r4c1:"4",
//                                         r1c2:"5", r2c2:"6", r3c2:"7", r4c2:"8",
//                                         r1c3:"9", r2c3:"10", r3c3:"11", r4c3:"12",
//                                         r1c4:"13", r2c4:"14", r3c4:"15", r4c4:"16"},
//                                        {yellow:{yellow1:"1", yellow2:"2", yellow3:"3", yellow4:"4"},
//                                         green:{green1:"5", green2:"6", green3:"7", yellow4:"8"},
//                                         blue:{blue1:"9", blue2:"10", blue3:"11", blue4:"12"},
//                                         purple:{purple1:"13", purple2:"14", purple3:"15", purple4:"16"}})