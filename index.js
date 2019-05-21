const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send('Hello world');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server is listening at');
    console.log(`http://localhost:${port}`);
    console.log(`http://127.0.0.1:${port}`);
});
