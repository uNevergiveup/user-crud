const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const users = require('./usersData.json');


app.use(cors());

app.get('/users', (req, res) => {
    res.json(users);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
