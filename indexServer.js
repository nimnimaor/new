const express = require('express')
var cors = require('cors')
const app = express()
var bodyParser = require('body-parser');

const port = 3001;
app.use(bodyParser.json());	
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.get('/', (req, res) => {
    res.send("Hello World");
})
app.post('/signin', async (req, res) => {
    console.log(req.body.password);
    //res.send("The pass: "+ req.body.password);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})