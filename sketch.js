const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const numCols = 10
const numRows = 10
const squareSize = canvasWidth/20
const offsetX = canvasWidth/4
const offsetY = canvasHeight/14
const player1Color = [220,20,200]
const player2Color = [0,220,0]
const initSquareColor = 60
const clickedSquareColor = 230
const squareOutlineColor = [230,10,10]
const bgCol = 30
let squares = []
let circles = []
let stars = []
let turn  = 0



function setup(){
    createCanvas(canvasWidth, canvasHeight)
    squares = createSquares(numRows, numCols, squareSize, offsetX, offsetY, initSquareColor, clickedSquareColor, squareOutlineColor)
}

function draw(){
    background(bgCol)
    drawSquares(squares)
}

function mousePressed(){
    const square = getSquare(mouseX, mouseY, squares)
    console.log(square)
    if(square && !square.filled){
        console.log(square, 'found')
        square.clicked = !square.clicked
        if(turn < 1){
            addCircle(square, player1Color)
            turn = 1
        }else{
            addCircle(square,player2Color)
            turn = 0
        }

    }else{
        console.log('outside')
    }

    
}

