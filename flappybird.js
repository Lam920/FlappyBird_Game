//board
let board;
//Dimension for background image draw on canvas
let boardWidth = 360;
let boardHeight = 640;
//context of canvas
let context;

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;

let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
}

//pipes for bird to jump

let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = boardHeight;

let topPipeImg;
let bottomPipeImg;


window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width  = boardWidth;
    //Draw 2d onload
    context = board.getContext("2d");

    birdImg = new Image();
    birdImg.src = "./flappybird.png";
    birdImg.onload = function(){
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./bottompipe.png";

    birdImg = new Image();
    birdImg.src = "./flappybird.png";
    birdImg.onload = function(){
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    requestAnimationFrame(update);
    setInterval(placePipes, 1500);
}


//update frame of canvas
function update(){
    requestAnimationFrame(update);
    //clear frame
    context.clearRect(0, 0, board.width, board.height);
    //draw bird again
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    //pipes

    for (let i = 0; i < pipeArray.length; i++){
        let pipe = pipeArray[i];
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
    }
}


function placePipes(){

    let topPipe = {
        img: topPipeImg,
        x: pipeX,
        y: pipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }

    pipeArray.push(topPipe);
}