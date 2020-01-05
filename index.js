const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'Enyo'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server app listening on port 5000'));