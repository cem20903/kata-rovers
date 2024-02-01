
const FORWARD = 'F'
const BACKWARD = 'B'

const MOVES = {
  FORWARD: 'F',
  BACKWARD: 'B'
}

class RoverMars {
  x: number
  y: number
  orientation: string
  constructor () {
    this.x = 0
    this.y = 0
    this.orientation = 'N'
  }
  
  getX () {
    return this.x
  }
  
  getY () {
    return this.y
  }
  
  getOrientation () {
    return this.orientation
  }
  
  move (movements: Array<string>) {
  
    movements.forEach(movement => {
    
      if(movement === MOVES.FORWARD) {
        this.y = this.y + 1
      }
      
      if(movement === MOVES.BACKWARD) {
      
      if(this.orientation === 'N') {
        this.y = this.y - 1
      }
      
      if(this.orientation === 'S') {
        this.y = this.y + 1
      }
      
      }
      
      
      
      if(movement === 'L') {
      
      if(this.orientation === 'N') {
        this.orientation = 'W'
        return
      }
      
      if(this.orientation === 'W') {
        this.orientation = 'S'
      }
      
      }
      
      
      
    })
  }
}


export { RoverMars }
