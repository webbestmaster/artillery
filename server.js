function streamBodyParser(request) {
    return new Promise((resolve, reject) => {
        let body = '';

        request.on('data', data => {
            body += data;
        });

        request.on('end', () => resolve(body));
        request.on('error', reject);
        request.on('close', evt => console.warn('WARNING: request closed', evt));
    });
}

const http = require('http');

let counter = 0;

http.createServer((req, res) => {
    counter += 1;

    console.log(req.url);

    streamBodyParser(req).then(console.log);

    res.end('!');
}).listen(8080);

setInterval(() => console.log(counter), 1e3);

console.log('Server running on port 8080');