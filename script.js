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
        name: "1, 2, 3, ...",
        author: "Lucy",
        difficulty: "3",
        initialBoardState: {
            r1c1: "STEVE", r2c1: "NOTEPAD", r3c1: "PRUIM", r4c1: "MAIN",
            r1c2: "MARK", r2c2: "BODY", r3c2: "CALCULATOR", r4c2: "AGENT",
            r1c3: "MARIO", r2c3: "HALLOWEEN", r3c3: "HEAD", r4c3: "CORTANA",
            r1c4: "LINK", r2c4: "CHRISTMAS", r3c4: "VALENTINES", r4c4: "FILE EXPLORER"
        },
        solutionGroups: {
            yellow: { yellow1: "CALCULATOR", yellow2: "CORTANA", yellow3: "FILE EXPLORER", yellow4: "NOTEPAD" }, yellowDescription: "PRE INSTALLED WINDOWS APPS",
            green: { green1: "BODY", green2: "HEAD", green3: "MAIN", green4: "MARK" }, greenDescription: "HTML TAGS",
            blue: { blue1: "CHRISTMAS", blue2: "HALLOWEEN", blue3: "PRUIM", blue4: "VALENTINES" }, blueDescription: "HOLIDAYS",
            purple: { purple1: "AGENT", purple2: "LINK", purple3: "MARIO", purple4: "STEVE" }, purpleDescription: "FAMOUS VIDEO GAME CHARACTERS"
        }
    },
    "3": {
        name: "5 in a Category?",
        author: "lucy",
        difficulty: "4",
        initialBoardState: {
            r1c1: "NARRATOR", r2c1: "GUPPY", r3c1: "SURGEI", r4c1: "BITES",
            r1c2: "CHEKOV", r2c2: "CATFISH", r3c2: "GERMAN", r4c2: "DROPOUT",
            r1c3: "MAAD", r2c3: "SALMON", r3c3: "MUSLIM", r4c3: "TROUT",
            r1c4: "HERRING", r2c4: "CARTER", r3c4: "IGOR", r4c4: "CLIFF"
        },
        solutionGroups: {
            yellow: { yellow1: "CATFISH", yellow2: "GUPPY", yellow3: "SALMON", yellow4: "TROUT" }, yellowDescription: "FRESHWATER FISH",
            green: { green1: "BITES", green2: "CARTER", green3: "DROPOUT", green4: "MAAD" }, greenDescription: "PARTS OF GRAMMY NOMINATED RAP ALBUMS",
            blue: { blue1: "CHEKOV", blue2: "CLIFF", blue3: "HERRING", blue4: "NARRATOR" }, blueDescription: "LITERARY DEVICES MISSING A WORD",
            purple: { purple1: "GERMAN", purple2: "IGOR", purple3: "MUSLIM", purple4: "SURGEI" }, purpleDescription: "FIRST NAMES OF RUSSIAN POLITICANS "
        }
    },
    "4": {
        name: "Straightforward",
        author: "Lucy and Viv",
        difficulty: "2",
        initialBoardState: {
            r1c1: "LUMBER", r2c1: "TRUE LOVE", r3c1: "HERSHEY", r4c1: "SCHOOL",
            r1c2: "FRENCH", r2c2: "FUGI", r3c2: "GAGGLE", r4c2: "MURDER",
            r1c3: "TIP", r2c3: "SHUN", r3c3: "FIREARM", r4c3: "PRIDE",
            r1c4: "HONEYCRISP", r2c4: "ENVY", r3c4: "DEATH", r4c4: "GALA"
        },
        solutionGroups: {
            yellow: { yellow1: "GAGGLE", yellow2: "MURDER", yellow3: "SCHOOL", yellow4: "PRIDE" }, yellowDescription: "ANIMAL GROUPS",
            green: { green1: "GALA", green2: "ENVY", green3: "FUGI", green4: "HONEYCRISP" }, greenDescription: "TYPES OF APPLES",
            blue: { blue1: "FRENCH", blue2: "TRUE LOVE", blue3: "HERSHEY", blue4: "DEATH" }, blueDescription: "TYPES OF KISSES",
            purple: { purple1: "FIREARM", purple2: "LUMBER", purple3: "SHUN", purple4: "TIP" }, purpleDescription: "BODY PARTS WITH A LETTER CHANGED"
        }
    },
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
        const templateString = `<a href="/game.html?id=[ID]" class="puzzleLink">[PUZZLENAME] by [PUZZLEAUTHOR] | Difficulty [DIFFICULTY]/5</a>`
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