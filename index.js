const express = require('express');

const cors = require('cors');

const app = express();

const port = process.env.PORT || 4000;

const chefWithRecipe = require('./chefWithRecipe.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send(chefWithRecipe)
})

app.listen(port, () => {
    console.log(`chef data is loading from port ${port}`);
})