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
    categoriesGuessed = 0
    guessHistory = []

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
            // console.log(currentDivName);
            let currentDiv = document.getElementById(currentDivName)
            currentDiv.innerText = this.initialPuzzleStateObject[key]
            i++
        }
    }
    getPathString(obj, value, currentPath = '') {
        for (const key in obj) {

            let newPath = currentPath
            ? (Array.isArray(obj) ? `${currentPath}[${key}]` : `${currentPath}.${key}`)
            : key;

            if (obj[key] === value) {
                return newPath;
            }

            if (typeof obj[key] === 'object' && obj[key] !== null) {
            const result = this.getPathString(obj[key], value, newPath);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }

    guessHistoryToString() {
        console.log("this.guessHistory ==> ", this.guessHistory);
        console.log("this.guessHistory.length ==> ", this.guessHistory.length);
        let answersString = ""
        console.log("typeof this.answerHistory ==> ", typeof this.answerHistory);
        for (let x = 0; x < this.guessHistory.length; x++) {
            if ((this.guessHistory[x]) == "NEWLINE") {
                answersString = answersString + "\n"
            } else {
                answersString = answersString + this.guessHistory[x]
            }
        }
        return answersString
    }

    removeSelected() {
        for (let x = 1; x <= 16; x++) {
            let currentDiv = document.getElementById(`div${x}`)
            if (currentDiv.classList.contains("selected")) {
                currentDiv.classList.remove("selected")
            }
        }
    }

    setCorrectlyGuessedCategory(color) {
        let yellow = "#f9df6d"
        let green = "#a0c35a"
        let blue = "#b0c4ef"
        let purple = "#ba81c5"
        console.log(`setting correct category to ${color}`);
    }

    submit() {
        let submittedValues = []
        let guessPaths = []
        let guessColors = []
        for (let x = 1; x <= 16; x++) {
            let currentDiv = document.getElementById(`div${x}`)
            if (currentDiv.classList.contains("selected")) {
                submittedValues.push(currentDiv.innerText)
                guessPaths.push(this.getPathString(this.puzzleSolutionObject, currentDiv.innerText))
            }
        }
        console.log("guessPaths ==> ", guessPaths);
        console.log("submittedValues ==> ", submittedValues);
        for (let x = 0; x < 4; x++) {
            let text = guessPaths[x]
            text = text.split(".")[0]
            console.log("text ==> ", text);
            guessColors[x] = text
        }
        console.log("guessPaths ==> ", guessPaths);
        console.log("guessColors ==> ", guessColors);
        let numOfYellow = 0
        let numOfBlue = 0
        let numOfGreen = 0
        let numOfPurple = 0
        for (let x = 0; x < 4; x++) {
            switch (guessColors[x]) {
                case "yellow":
                    numOfYellow += 1
                    this.guessHistory.push("🟨")
                    break
                case "blue":
                    numOfBlue += 1
                    this.guessHistory.push("🟦")
                    break
                case "green":
                    numOfGreen += 1
                    this.guessHistory.push("🟩")
                    break
                case "purple":
                    numOfPurple += 1
                    this.guessHistory.push("🟪")
                    break
            }
        }
        this.guessHistory.push("NEWLINE")
        if (numOfYellow == 3 || numOfBlue == 3 || numOfGreen == 3 || numOfPurple == 3) {
            // alert: one away
            console.log("one away...");
        }
        else if (numOfYellow == 4) {
            this.setCorrectlyGuessedCategory("yellow")
            console.log("correct: yellow");
        }
        else if (numOfBlue == 4) {
            this.setCorrectlyGuessedCategory("blue")
            console.log("correct blue");
        }
        else if (numOfGreen == 4) {
            this.setCorrectlyGuessedCategory("green")
            console.log("correct green");
        }
        else if (numOfPurple == 4) {
            this.setCorrectlyGuessedCategory("purple")
            console.log("correct Purple");
        }
        this.removeSelected()
    }
}