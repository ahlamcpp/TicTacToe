let plyer1 = 'X';
let plyer2 = 'O';
let count = 1;
let xWon = 0;
let oWin = 0;
let gameOver = false;
let game = [
    ' ', ' ', ' ', ' ', //0 1 2 11
    ' ', ' ', ' ', ' ', //3 4 5 12
    ' ', ' ', ' ', ' ', //6 7 8  13
    ' ', ' ', ' ', ' ' //10 20 30  40
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
        if (game[0] === p && game[1] === p && game[2] === p && game[11] === p  ) {
            win = true;
            gameOver = true;
        } else if (game[3] === p && game[4] === p && game[5] === p && game[12] === p) {
            win = true;
            gameOver = true;
        } else if (game[6] === p && game[7] === p && game[8] === p && game[13] === p) {
            win = true;
            gameOver = true;
        } else if (game[10] === p && game[20] === p && game[30] === p && game[40] === p) {
            win = true;
            gameOver = true;
        } else if (game[0] === p && game[4] === p && game[8] === p && game[40] === p) {
            win = true;
            gameOver = true;
        } else if (game[11] === p && game[5] === p && game[7] === p && game[10] === p) {
            win = true;
            gameOver = true;
        } else if (game[1] === p && game[4] === p && game[7] === p && game[20] === p) {
            win = true;
            gameOver = true;
        } else if (game[2] === p && game[5] === p && game[8] === p && game[30] === p) {
            win = true;
            gameOver = true;
        }
        else if (game[11] === p && game[12] === p && game[13] === p  && game[40] === p) {
            win = true;
            gameOver = true;
        } else if (game[0] === p && game[3] === p && game[6] === p && game[10] === p) {
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
        if (count >= 17) {
            swal("Tie", " ", "warning");
        }
    });

}

// to clear all items
function restart() {
    count = 1;
    game = [
        ' ', ' ', ' ', ' ', //0
        ' ', ' ', ' ', ' ', //1
        ' ', ' ', ' ', ' ', //2
        ' ', ' ', ' ', ' '  //3
    ];
    $('.item').text('');

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
//  Function that displays countdown 
//  30 seconds for countdown 
function counter($el, n, func) {
    (function loop() {
      $el.html(n);
      if (n--) {
        setTimeout(loop, 1000);
      } else {
        func();
      }
    })();
  }
  
  var btn = $('#countdown-button');
  var msg = "You'll explode in <span id='countdown'></span>...";
  var sec = 40; //length of countdown
  
  btn.click(function() {
    
    btn.html(msg).removeClass("btn-primary").addClass("btn-danger disabled");
    
    counter($('#countdown'), sec, updateBtn);
  });
  
  function updateBtn(){
    btn.text("Start another Countdown!").removeClass("btn-danger disabled").addClass("btn-warning");
  }
