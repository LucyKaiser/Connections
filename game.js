export default class Game {
    puzzleName
    puzzleAuthor
    initialPuzzleStateObject = {r1c1:"", r2c1:"", r3c1:"", r4c1:"",
                               r1c2:"", r2c2:"", r3c2:"", r4c2:"",
                               r1c3:"", r2c3:"", r3c3:"", r4c3:"",
                               r1c4:"", r2c4:"", r3c4:"", r4c4:""}
    puzzleSolutionObject = {yellow:{yellow1:"", yellow2:"", yellow3:"", yellow4:""}, yellowDescription:"",
                           green:{green1:"", green2:"", green3:"", yellow4:""}, greenDescription:"",
                           blue:{blue1:"", blue2:"", blue3:"", blue4:""}, blueDescription:"",
                           purple:{purple1:"", purple2:"", purple3:"", purple4:""}, purpleDescription:""}
    maxGuessAmount = 4

    constructor(puzzleName, puzzleAuthor, initialPuzzleStateObject, puzzleSolutionObject) {
        this.puzzleName = puzzleName
        this.puzzleAuthor = puzzleAuthor
        this.initialPuzzleStateObject = initialPuzzleStateObject
        this.puzzleSolutionObject = puzzleSolutionObject
    }
    getNumberOfSelectedBlocks() {
        let totalCount = 0
        for (let x = 1; x <= 16; x++) {
            let currentDiv = document.getElementById(`div${x}`)
            if (currentDiv.classList.contains("selected")) {
                totalCount += 1
            }
        }
        return totalCount
    }
    initializeBoard() {
        let puzzleTitle = document.getElementById("puzzleTitle")
        let puzzleAuthor = document.getElementById("puzzleAuthor")
        puzzleTitle.innerText = this.puzzleName
        puzzleAuthor.innerText = this.puzzleAuthor
        let i = 1
        for (let key in this.initialPuzzleStateObject) {
            let currentDivName = `div${i}`
            console.log(currentDivName);
            let currentDiv = document.getElementById(currentDivName)
            currentDiv.innerText = this.initialPuzzleStateObject[key]
            i++
        }
    }
    submit() {
        let submittedValues = []
        for (let x = 1; x <= 16; x++) {
            let currentDiv = document.getElementById(`div${x}`)
            if (currentDiv.classList.contains("selected")) {
                submittedValues.push(currentDiv.innerText)
            }
        }
        console.log("submittedValues ==> ", submittedValues);
        let yellowAnswers = Object.values(this.puzzleSolutionObject.yellow)
        console.log("yellowAnswers ==> ", yellowAnswers);
        let blueAnswers = Object.values(this.puzzleSolutionObject.blue)
        console.log("blueAnswers ==> ", blueAnswers);
        let greenAnswers = Object.values(this.puzzleSolutionObject.green)
        console.log("greenAnswers ==> ", greenAnswers);
        let purpleAnswers = Object.values(this.puzzleSolutionObject.purple)
        console.log("purpleAnswers ==> ", purpleAnswers);
        // https://stackoverflow.com/a/59581552
        let matchesYellow = JSON.stringify(yellowAnswers.sort()) === JSON.stringify(submittedValues.sort())
        console.log("matchesYellow ==> ", matchesYellow);
        let matchesBlue = JSON.stringify(blueAnswers.sort()) === JSON.stringify(submittedValues.sort())
        console.log("matchesBlue ==> ", matchesBlue);
        let matchesGreen = JSON.stringify(greenAnswers.sort()) === JSON.stringify(submittedValues.sort())
        console.log("matchesGreen ==> ", matchesGreen);
        let matchesPurple = JSON.stringify(purpleAnswers.sort()) === JSON.stringify(submittedValues.sort())
        console.log("matchesPurple ==> ", matchesPurple);

        if (matchesYellow == true){
            // Yellow case
            console.log("matches yellow");
        }
        else if (matchesBlue == true) {
            // Blue case
            console.log("matches blue");

        }
        else if (matchesGreen == true) {
            // Green case
            console.log("matches green");

        }
        else if (matchesPurple == true) {
            // Purple case
            console.log("matches purple");

        }
    }
}