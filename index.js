const { request } = require('express');
const express  = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://changki:lock8636@site01.jllqvbd.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("mongdb connect..."))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! ~~ 안녕'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));