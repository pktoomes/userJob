const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const robotDal = require('./dal.js')
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', function(req,res){
  const robots = robotDal.getRobots();
  res.render('userList', {robots : robots});
});
app.get('/:robotId', function(req,res){
  console.log('req.params', req.params)
  const chosenRobot = robotDal.getRobot(req.params.robotId);
  res.render('profile', chosenRobot);
});
app.set('port', 3000);
app.listen(3000, function(){
  console.log('application is running');
});
