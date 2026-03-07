import Game from './game.js';

function test() {
    console.log("initialized game object");
    let game = new Game("Puzzle 1", "Lucy", {r1c1:"1", r2c1:"2", r3c1:"3", r4c1:"4",
                                            r1c2:"5", r2c2:"6", r3c2:"7", r4c2:"8",
                                            r1c3:"9", r2c3:"10", r3c3:"11", r4c3:"12",
                                            r1c4:"13", r2c4:"14", r3c4:"15", r4c4:"16"},
                                           {yellow:{yellow1:"1", yellow2:"2", yellow3:"3", yellow4:"4"},
                                            green:{green1:"5", green2:"6", green3:"7", green4:"8"},
                                            blue:{blue1:"9", blue2:"10", blue3:"11", blue4:"12"},
                                            purple:{purple1:"13", purple2:"14", purple3:"15", purple4:"16"}})
    console.log(game.getNumberOfSelectedBlocks())
    game.initializeBoard()
    setTimeout(() => {
        game.submit()
    }, 10);
}
window.test = test

// document.addEventListener("DOMContentLoaded", () => {
//     const gameGrid = document.getElementById("gameGrid")
//     for (let x = 0; x < 15; x++) {
//         let divName = `div${x+1}`
//         let targetDiv = document.getElementById(divName)
//         targetDiv.addEventListener("click", () => {
            
//         })
//     }
// })

// let game = new Game("Puzzle 1", "Lucy", {r1c1:"1", r2c1:"2", r3c1:"3", r4c1:"4",
//                                         r1c2:"5", r2c2:"6", r3c2:"7", r4c2:"8",
//                                         r1c3:"9", r2c3:"10", r3c3:"11", r4c3:"12",
//                                         r1c4:"13", r2c4:"14", r3c4:"15", r4c4:"16"},
//                                        {yellow:{yellow1:"1", yellow2:"2", yellow3:"3", yellow4:"4"},
//                                         green:{green1:"5", green2:"6", green3:"7", yellow4:"8"},
//                                         blue:{blue1:"9", blue2:"10", blue3:"11", blue4:"12"},
//                                         purple:{purple1:"13", purple2:"14", purple3:"15", purple4:"16"}})