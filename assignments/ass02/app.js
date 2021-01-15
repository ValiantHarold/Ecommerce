const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('in the middle');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the middle2');
//     res.send('<h1>Assignment almost solved</h1>');
// });

app.use('/users', (req, res, next) => {
    res.send('<h1>handles /users </h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Handles / </h1>');
});

app.listen(3000);