let plyer1 = 'X';
let plyer2 = 'O';
let count = 1;
let xWon = 0;
let oWin = 0;
let gameOver = false;
let game = [
    ' ', ' ', ' ',  //0 1 2
    ' ', ' ', ' ', //3 4 5
    ' ', ' ', ' '  //6 7 8 
];
// click on the board to play
$('.item').click(games)
function games(event) {
    if (gameOver == false) {
        const position = $(event.target).attr("id");
        if (count % 2 == 0) {
            $(event.target).text(plyer2);
            game[position] = plyer2
        } else {
            $(event.target).text(plyer1);
            game[position] = plyer1
        }
        $(event.target).off('click')

        count++;

        checkWinner();
    }
}
// Loop to check for winner 
const checkWinner = function (a) {
    let win = false;
    let players = ["X", "O"];
    players.forEach(function (p) {
        if (game[0] === p && game[1] === p && game[2] === p) {
            win = true;
            gameOver = true;
        } else if (game[3] === p && game[4] === p && game[5] === p) {
            win = true;
            gameOver = true;
        } else if (game[6] === p && game[7] === p && game[8] === p) {
            win = true;
            gameOver = true;
        } else if (game[0] === p && game[4] === p && game[8] === p) {
            win = true;
            gameOver = true;
        } else if (game[2] === p && game[4] === p && game[6] === p) {
            win = true;
            gameOver = true;
        } else if (game[0] === p && game[3] === p && game[6] === p) {
            win = true;
            gameOver = true;
        } else if (game[1] === p && game[4] === p && game[7] === p) {
            win = true;
            gameOver = true;
        } else if (game[2] === p && game[5] === p && game[8] === p) {
            win = true;
            gameOver = true;
        }
 

        if (win === true) {
            recordWin(p);
    // pop up for the winner
            swal({
                title: 'WooHoo!',
                text: p + ' is winner ',
                icon: "./images/win.gif",
                button: "Aww yiss!",

            });


            win = false;
        }
        // all boxes is full >> Tie
        if (count >= 10) {
            swal("Tie", " ", "warning");
        }
    });

}

// to clear all items
function restart() {
    count = 1;
    game = [
        ' ', ' ', ' ',  //0
        ' ', ' ', ' ',  //1
        ' ', ' ', ' '   //2
    ];
    $('.item').text('');
    // location.reload();
    gameOver = false;
    $('.item').off('click')
    $('.item').click(games)
}

$('#res').click(restart);

// new html page 
function start() {

    $('.item').off('click')
    $('.item').click(games)
}

$('#res').click(restart);


//  score for winner
function recordWin(winner) {
    console.log('winner is ', winner)
    console.log('xwon is ', xWon)
    if (winner === "X") {
        xWon++;

    } else if (winner === "O") {

        oWin++;
    }
    $("#px").text("Player X : " + xWon);
    $("#po").text("Player O : " + oWin);

}
