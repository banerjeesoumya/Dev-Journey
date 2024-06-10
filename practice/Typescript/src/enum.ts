enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething (keyPressed : Direction) : void {
    if (keyPressed == Direction.Up) {
        // some logic
    }
    if (keyPressed == Direction.Down) {
        // some logic
    }
    if (keyPressed == Direction.Left) {
        // some logic
    }
    if (keyPressed == Direction.Right) {
        // some logic
    }
}

doSomething(Direction.Up)
doSomething(Direction.Down)

console.log(Direction.Right)    
console.log(Direction.Left)