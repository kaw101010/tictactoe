let counter = 0;
let block_x = [];
let block_o = [];
function gamePlay() {
    document.querySelector('.redo').style.display = "none";
    const blocks = document.querySelectorAll('div[data-key]');
    document.querySelector('p.result').style.display = "none";
    block_o = [];
    block_x = [];
    const turn = document.createElement('p')
    turn.classList.add('turn')
    turn.textContent == "X's turn"
    document.body.insertBefore(turn, document.querySelector('div.board'));
    if (counter % 2 == 1) {
        turn.textContent = "O's turn";
    }
    turn.textContent = "X's turn";
    blocks.forEach(block => block.addEventListener('click', () => {
        counter++;
        document.querySelector('.redo').style.display = "inline";
        block.style.color = 'aliceblue';
        if (counter <= 9 && block.textContent != "X" && block.textContent != "O"){
            if (counter % 2 == 1){
                block.textContent = "X";
                turn.textContent = "O's turn";
                block_x.push(block.getAttribute('data-key'));
            }
            else if (counter % 2 == 0){
                block.textContent = "O";
                turn.textContent = "X's turn"
                block_o.push(block.getAttribute('data-key'))
            }
        }
        if (counter <= 9){
            let op = checkWinner()
            if (op == "X wins"){
                document.querySelector('p.result').style.display = "inline";
                document.querySelector('p.result').textContent = "X Wins!";
                document.querySelector('.turn').textContent = "Game Over! X wins!";
            }
            else if (op == "O wins"){
                document.querySelector('p.result').style.display = "inline";
                document.querySelector('p.result').textContent = "O WINS!";
                document.querySelector('.turn').textContent = "Game Over! O wins!";
            }
            // If no side wins
            if (op == undefined && counter == 9) {
                document.querySelector('p.result').style.display = "inline";
                document.querySelector('p.result').textContent = "Tie!";
                document.querySelector('.turn').textContent = "Game Over! It's a tie";
            }
        }
        })
)};

if (counter == 0){
    gamePlay();
}

// The possibilities of a side winning
const wins = [['1','2','3'],['1','5','9'],['1','4','7'],['2','5','8'],['3','5','7'],['4','5','6'],['3','6','9'],['7','8','9']];

function checkWinner() {
    for (let win of wins){
        countX = 0;
        countO = 0;
        for (let key of win){
            if (block_x.includes(key)){
                countX++;
            }
            if (block_o.includes(key)){
                countO++;   
            }
        }
        if (countO == 3){
            win.forEach(val => document.querySelector(`div[data-key = "${val}"]`).style.backgroundColor = '#faf9f6');
            win.forEach(val => document.querySelector(`div[data-key = "${val}"]`).style.color = '#555555');
            win.forEach(val => document.querySelector(`div[data-key = "${val}"]`).style.borderColor = '#555555');
            document.querySelectorAll('div.block').forEach(ele => ele.style.pointerEvents = "none");
            document.body.querySelector('p.turn').textContent = "Game Over! O Wins!"
            return "O wins";
        }
        else if (countX == 3){
            win.forEach(val => document.querySelector(`div[data-key = "${val}"]`).style.backgroundColor = '#faf9f6');
            win.forEach(val => document.querySelector(`div[data-key = "${val}"]`).style.color = '#555555');
            win.forEach(val => document.querySelector(`div[data-key = "${val}"]`).style.borderColor = '#555555');
            document.querySelectorAll('div.block').forEach(ele => ele.style.pointerEvents = "none");
            document.body.querySelector('p.turn').textContent = "Game Over! X Wins!"
            return "X wins";
        }
    }
}; 

function restart() {
    document.querySelectorAll('div.block').forEach(val => val.textContent = "");
    document.querySelectorAll('div.block').forEach(val => val.style.color = "#faf9f6");
    document.querySelectorAll('div.block').forEach(val => val.style.backgroundColor = "#404040");
    document.querySelectorAll('div.block').forEach(val => val.style.borderColor = "#faf9f6");
    document.querySelectorAll('div.block').forEach(ele => ele.style.pointerEvents = "auto");
    document.querySelector('p.turn').textContent = "X's turn";
    document.querySelector('p.result').style.display = "none";
    block_o = [];
    counter = 0;
    block_x = [];
};