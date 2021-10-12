
// function getCoordinates(idx, rows, cols, size){
//     // 1/3
//     // let rowC =  Math.floor(idx/cols) 
//     // let colC = idx % cols
//     // let rowCounter = 0
//     // let colCounter = 0
//     // for(let i = 0; i < idx; i++){
//     //     if(colCounter < cols -1){
//     //         colCounter ++
//     //     } else{
//     //         rowCounter++
//     //         colCounter = 0
//     //     }
//     // }
//     // // console.log(rowCounter, rowC)
//     // console.log(idx, colC, colCounter)
//     return {
//         x: size * (idx % cols) + size,
//         y: size * Math.floor(idx/cols) + size,
//     }   
// }

function getCoordinates(idx, rows, cols, size, offsetX, offsetY){
    return {
        x: size * (idx % cols) + offsetX,
        y: size * Math.floor(idx/cols) + offsetY,
    }   
}

function createSquares(rows, cols, size, offsetX, offsetY, fillColor, clickedColor, strokeColor){
    arr = Array.from({ length: (rows * cols)}, (el, i ) => {
        const {x, y} = getCoordinates(i, rows, cols, size, offsetX, offsetY)       
        return {
            x, y, 
            w:size, 
            h:size,
            fillColor,
            clickedColor,
            strokeColor,
            clicked : false, 
        }
    })
    return arr
}

function createSquares2(rows, cols, size){
    let rowCounter = 0
    let colCounter = 0
    let arr = []
    for(let i = 0; i < rows * cols; i++){
        const xPos = size * colCounter
        const yPos = size * rowCounter
        if(colCounter < cols - 1){
            colCounter ++
        } else{
            rowCounter++
            colCounter = 0
        }
        arr.push({
            x: xPos + size,
            y: yPos + size,
            w: size,
            h: size,
        })
    }
    return arr
}


function drawSquares(arr, bgCol, lineCol){
    arr.forEach(square => {
        if(square.clicked){
            fill(square.clickedColor)
        }else{
            fill(square.fillColor)
        }        
        stroke(square.strokeColor)
        strokeWeight(4)
        rect(square.x, square.y, square.w, square.h)
        
        if(square.filled){
            // console.log(square)
            fill(square.circleColor)
            noStroke()
            ellipse(square.x + square.w/2, square.y + square.h/2, square.w/2, square.h/2)
        }
    
    })
}

function addCircle(square, col){
    square.filled = true
    square.circleColor = col
}



// function drawGrid(){
//     for(i = 1; i < numColumns; i++){
//         stroke(255)
//         line(startX, startY * (i + 1), startX * (numColumns + 1), startY * (i + 1))
//     }
//     for(i = 1; i < numRows; i++){
//         stroke(255)
//         line(startX * (i + 1), startY, startX * (i + 1), startY * (numRows + 1))
//     }
// }