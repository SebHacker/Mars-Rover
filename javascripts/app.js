// Rover Object Goes Here
let rover = {
  direction: 'N',
  xPosition: 0,
  yPosition : 0,
  travelLog:[]
};
// ======================

// grid variable definition 10x10
var grid=[
  // "o" for obstacles and "oR" for other rover 
  [null,"o",null,null,null,"o",null,null,null,null],
  [null,"or",null,null,null,null,null,null,null,null],
  [null,null,"or",null,null,null,null,"o",null,null],
  ["o",null,null,null,null,null,null,"o",null,null],
  [null,null,null,"o",null,null,null,null,"or",null],
  [null,null,null,null,null,null,"or",null,null,null],
  [null,null,"o",null,null,null,null,null,null,null],
  [null,null,null,null,"o",null,null,null,null,"or"],
  [null,null,null,null,null,null,"o",null,null,null],
  [null,"o",null,null,null,null,null,null,null,null]
];

// check obstacles and other orver functions 

function checkObstacle(grid,x,y){
  let checkObstacle=false;
  if (x>=0 && y>=0){
    if (grid[x][y]== "o"){
      checkObstacle =true;
      console.log ("Obstacle detected in the position (" + x + "," + y +")")
    }
  } 
  return checkObstacle;
}

function checkOtherRover(grid,x,y){
  let checkOtherRover=false;
  if (x>=0 && y>=0){
    if (grid[x][y]== "or"){
      checkOtherRover =true;
      console.log ("Other rover detected in the position (" + x + "," + y +")")
    } 
  } 
  return checkOtherRover;
}

// ======================

function turnLeft(rover){
  switch (rover.direction){
    case "N": 
      rover.direction="W";
      break;
    case "E":
      rover.direction="N";
      break;
    case "S":
      rover.direction="E";
      break;
    case "W":
      rover.direction="S";
      break;
      default: "Please provide a direction N,S,E,W"
  }
  console.log("turnLeft was called! The new direction is " + rover.direction);
}

function turnRight(rover){
  switch (rover.direction){
    case "N": 
      rover.direction="E";
      break;
    case "E":
      rover.direction="S";
      break;
    case "S":
      rover.direction="W";
      break;
    case "W":
      rover.direction="N";
      break;
      default: "Please provide a direction N,S,E,W"
  }
  console.log("turnRight was called! The new direction is " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called. The direction is " + rover.direction);
  switch (rover.direction){
    case "N": 
      rover.travelLog.push([rover.xPosition,rover.yPosition]);
      if (rover.xPosition !== 0){
        if (checkObstacle(grid,rover.xPosition-1,rover.yPosition) == false && checkOtherRover(grid,rover.xPosition-1,rover.yPosition) == false){
          rover.xPosition -= 1;
          console.log("the rover is in row " + rover.xPosition + " and column " + rover.yPosition);
          break;
        }
      } else {
        console.log("the move forward was cancelled to avoid roaming of the map");
        break;
      }
    case "E":
      rover.travelLog.push([rover.xPosition,rover.yPosition]);  
      if (rover.yPosition !== 10){
          if (checkObstacle(grid,rover.xPosition,rover.yPosition+1) == false && checkOtherRover(grid,rover.xPosition,rover.yPosition+1) == false){
          rover.yPosition += 1;
          console.log("the rover is in row " + rover.xPosition + " and column " + rover.yPosition);
          break;
        }
      } else {
        console.log("the move forward was cancelled to avoid roaming of the map");
        break;
      }
    case "S":
      rover.travelLog.push([rover.xPosition,rover.yPosition]);  
      if (rover.xPosition !== 10){
        if (checkOtherRover(grid,(rover.xPosition+1),rover.yPosition) == false && checkObstacle(grid,(rover.xPosition+1),rover.yPosition) == false){
          rover.xPosition += 1;
          console.log("the rover is in row " + rover.xPosition + " and column " + rover.yPosition);
          break;
        }
      } else {
        console.log("the move forward was cancelled to avoid roaming of the map");
        break; 
      }
    case "W":
      rover.travelLog.push([rover.xPosition,rover.yPosition]);  
      if (rover.yposition !== 0){
        if (checkObstacle(grid,rover.xPosition,rover.yPosition-1) == false && checkOtherRover(grid,rover.xPosition,rover.yPosition-1) == false){
          rover.yPosition -= 1;
          console.log("the rover is in row " + rover.xPosition + " and column " + rover.yPosition);
          break;
        }
      } else {
        console.log("the move forward was cancelled to avoid roaming of the map");
        break;    
      }
    default: 
      console.log("The move is unknown. Please provide a direction N,S,E,W");
      break;
  }
}

function moveBackward(rover){
  console.log("move backward was called. The direction is " + rover.direction);
  switch (rover.direction){
    case "N": 
      rover.travelLog.push([rover.xPosition,rover.yPosition]);
      if (rover.xPosition !== 10){
        if (checkObstacle(grid,rover.xPosition+1,rover.yPosition) == false && checkOtherRover(grid,rover.xPosition+1,rover.yPosition) == false){
          rover.xPosition += 1;
          console.log("the rover is in row " + rover.xPosition + " and column " + rover.yPosition);
          break; 
        }
      } else {
        console.log("the move backward was cancelled to avoid roaming of the map");
        break;
      }
    case "E":
      rover.travelLog.push([rover.xPosition,rover.yPosition]);  
      if (rover.yPosition !== 0){
        if (checkObstacle(grid,rover.xPosition,rover.yPosition-1) == false && checkOtherRover(grid,rover.xPosition,rover.yPosition-1) == false){
          rover.yPosition -= 1;
          console.log("the rover is in row " + rover.xPosition + " and column " + rover.yPosition);
          break;
        }
      } else {
        console.log("the move backward was cancelled to avoid roaming of the map");
        break;
      }
    case "S":
      rover.travelLog.push([rover.xPosition,rover.yPosition]);  
      if (rover.xPosition !== 0){
        if (checkObstacle(grid,rover.xPosition-1,rover.yPosition) == false && checkOtherRover(grid,rover.xPosition-1,rover.yPosition) == false){
          rover.xPosition -= 1;
          console.log("the rover is in row " + rover.xPosition + " and column " + rover.yPosition);
          break;
        }
      } else {
        console.log("the move backward was cancelled to avoid roaming of the map");
        break; 
      }
    case "W":
      rover.travelLog.push([rover.xPosition,rover.yPosition]);  
      if (rover.yposition !== 10){
        if (checkObstacle(grid,rover.xPosition,rover.yPosition+1) == false && checkOtherRover(grid,rover.xPosition,rover.yPosition+1) == false){
          rover.yPosition += 1;
          console.log("the rover is in row " + rover.xPosition + " and column " + rover.yPosition);
          break;
        }
      } else {
        console.log("the move backward was cancelled to avoid roaming of the map");
        break;    
      }
    default: 
      console.log("The move is unknown. Please provide a direction N,S,E,W");
      break;
  }
}

function commands(listOfCommands, rover){
  for(let i=0; i<listOfCommands.length;i++){
    switch(listOfCommands[i]){
      case "f":
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "b":
        moveBackward(rover);
        default:
        console.log("the direction " + listOfCommands[i] + " does not exist. Please use f for forward, r for right and l for left" )
        break;
      };
  }
  console.log(rover.travelLog);
}


