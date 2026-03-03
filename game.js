export class Game {
    puzzleName
    puzzleAuthor
    initialPuzzleStateArray = {r1c1:"", r2c1:"", r3c1:"", r4c1:"",
                               r1c2:"", r2c2:"", r3c2:"", r4c2:"",
                               r1c3:"", r2c3:"", r3c3:"", r4c3:"",
                               r1c4:"", r2c4:"", r3c4:"", r4c4:""}
    puzzleSolutionArray = {yellow:{yellow1:"", yellow2:"", yellow3:"", yellow4:""}, yellowDescription:"",
                           green:{green1:"", green2:"", green3:"", yellow4:""}, greenDescription:"",
                           blue:{blue1:"", blue2:"", blue3:"", blue4:""}, blueDescription:"",
                           purple:{purple1:"", purple2:"", purple3:"", purple4:""}, purpleDescription:""}
    maxGuessAmount = 4

    constructor(puzzleName, puzzleAuthor, initialPuzzleStateArray, puzzleSolutionArray) {
        this.puzzleName = puzzleName
        this.puzzleAuthor = puzzleAuthor
        this.initialPuzzleStateArray = initialPuzzleStateArray
        this.puzzleSolutionArray = puzzleSolutionArray
    }
    getNumberOfSelectedBlocks() {
        let totalCount = 0
        for (let x = 1; x < 16; x++) {
            let currentDiv = document.getElementById(`div${x}`)
            if (currentDiv.classList.contains("selected")) {
                totalCount += 1
            }
        }
        return totalCount
    }
}
function test() {
    let game = new Game("Puzzle 1", "Lucy", {r1c1:"1", r2c1:"2", r3c1:"3", r4c1:"4",
                                            r1c2:"5", r2c2:"6", r3c2:"7", r4c2:"8",
                                            r1c3:"9", r2c3:"10", r3c3:"11", r4c3:"12",
                                            r1c4:"13", r2c4:"14", r3c4:"15", r4c4:"16"},
                                           {yellow:{yellow1:"1", yellow2:"2", yellow3:"3", yellow4:"4"},
                                            green:{green1:"5", green2:"6", green3:"7", yellow4:"8"},
                                            blue:{blue1:"9", blue2:"10", blue3:"11", blue4:"12"},
                                            purple:{purple1:"13", purple2:"14", purple3:"15", purple4:"16"}})
    console.log(game.getNumberOfSelectedBlocks())
}