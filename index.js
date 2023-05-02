const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

const chefWithRecipe = require('./chefWithRecipe.json');

app.get('/', (req, res) => {
    res.send(chefWithRecipe)
})

app.listen(port, () => {
    console.log(`chef data is loading from port ${port}`);
})