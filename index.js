const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'Enyo'});
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log('Server app listening on port 5000'));