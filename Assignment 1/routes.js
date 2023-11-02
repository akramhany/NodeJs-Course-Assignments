
function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/users')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><h2>Hello Users</h2><ul><li>User 1</li> <li>User 2</li></ul></body>');
        res.write('</html');
        return res.end();
    }

    if (url === '/')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"> <button type="submit">Submit</button></body>');
        res.write('</html');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST')
    {
        const data = [];
        req.on('data', (chunk) => {
            data.push(chunk);
            console.log("data added");
        });

        req.on('end' ,() => {
            const tempData = Buffer.concat(data).toString();
            const finalData = tempData.split('=')[1];
            console.log(finalData);
        })

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}

module.exports.handler = requestHandler;

