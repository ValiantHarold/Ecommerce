const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Input Username</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="create-user" placeholder="username"><button type="submit">Send</button></form></body>');
        res.write('<html>');
        return res.end();
    }
    if(url === '/users') {
        res.write('<html>');
        res.write('<head><title>dummy users</title></head>');
        res.write('<body><ul><li>mark</li><li>dave</li><li>john</li></ul></body>');
        res.write('<html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><h1>Hello from my Node.js Server </h1></body>');
    res.write('<html>');
    res.end();
};

module.exports = requestHandler;