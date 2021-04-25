const express = require('express')
var cors = require('cors')
const app = express()
var bodyParser = require('body-parser');
const db = require('./models/index.js');

var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());	
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.get('/', (req, res) => {
    res.send("Hello World");
})
app.post('/signin', async (req, res) => {
    var user = await db.Users.findAll({
      where: {
        email: req.body.email
      }
    });
    console.log(user);
    res.send(user);
})
app.post('/signup', async (req, res) => {
    const [user, created] = await db.Users.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        email: req.body.email,
        Username: "alon",
        password: req.body.password}
    });
    console.log(created); // The boolean indicating whether this instance was just created
    res.send(user);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
