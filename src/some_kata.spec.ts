import { expect } from "@jest/globals"

import { RoverMars } from "./some_kata"

describe("Rover Mars", () => {
  it("should know the position", () => {
    
    const rover = new RoverMars()
    
    expect(rover.getX()).toEqual(0)
    expect(rover.getY()).toEqual(0)
    expect(rover.getOrientation()).toEqual('N')
    
  })
  
  it("should move to the correct position when mars goes to forward", () => {
  
  const FORWARD = 'F'
  const rover = new RoverMars()

  rover.move([FORWARD])
  
  expect(rover.getY()).toEqual(1)
  expect(rover.getX()).toEqual(0)
  expect(rover.getOrientation()).toEqual('N')
    
  })
  
  it("should move to the correct position when mars goes to backward", () => {
  
    const BACKWARD = 'B'
    const rover = new RoverMars()
  
    rover.move([BACKWARD])
    
    expect(rover.getY()).toEqual(-1)
    expect(rover.getX()).toEqual(0)
    expect(rover.getOrientation()).toEqual('N')
      
    })
    
    it("should move to the correct position when mars goes to left", () => {
  
      const LEFT = 'L'
      const rover = new RoverMars()
    
      rover.move([LEFT])
      
      expect(rover.getY()).toEqual(0)
      expect(rover.getX()).toEqual(0)
      expect(rover.getOrientation()).toEqual('W')
        
      })
      
      it("should move to the correct position when mars recieve some movements", () => {
  
        const LEFT = 'L'
        const rover = new RoverMars()
      
        rover.move([LEFT, LEFT, 'B'])
        
        expect(rover.getY()).toEqual(1)
        expect(rover.getX()).toEqual(0)
        expect(rover.getOrientation()).toEqual('S')
          
        })
})
