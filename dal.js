const robot = require("./data.js");
//pull data from data.js
function getRobots(){
  return robot.users
}
//find an individual user
function getRobot(robotId){
  var chosenRobot = {};
  for(let i = 0; i < robot.users.length; i++){
    if(robot.users[i].id == robotId){
      console.log('here');
      chosenRobot = robot.users[i];
      console.log('chosen robot', chosenRobot);
    }
  }
  console.log(chosenRobot);
  return chosenRobot
}
module.exports = {
  getRobot: getRobot,
  getRobots: getRobots,
}
