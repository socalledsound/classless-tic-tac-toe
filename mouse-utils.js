function checkMouse(mX, mY, item){
    // console.log(mX, mY, item)
    if(mX > item.x && 
        mX < item.x + item.w &&
        mY > item.y &&
        mY < item.y + item.h){
            console.log('true')
            return true
        } else {
            return false
        }
}

function getSquare(mX, mY, arr){
    const found = arr.filter((item, idx) => {
        if(checkMouse(mX, mY, item)){
            console.log(idx)
            return item
        }
    })
    console.log(found)
    return found[0]
}