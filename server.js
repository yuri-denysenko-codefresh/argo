const http = require('http');

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

sleep(30000);

http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
}).listen(1700);
/*




 */
