let fs= require('fs')
const http = require("http");
const d = new Date();
const app = http.createServer();
const httpStatus = require("http-status-codes");
const port = 3000;

const routeResponseMap = {
    "/": "Views/index.html",
    "/Books.html": "Views/Books.html",
    "/lab1.css": "Public/lab1.css",
    "/Skyward.jpg": "Public/Skyward.jpg",
    "/Starsight.jpg": "Public/Starsight.jpg",
    "/Cytonic.jpg": "Public/Cytonic.jpg",
    "/books_3/book_1.html": "Views/books_3/book_1.html",
    "/books_3/book_2.html": "Views/books_3/book_2.html",
    "/books_3/book_3.html": "Views/books_3/book_3.html",
    "/error": "Views/Error.html"
    }

app.on("request", (req, res) => {
  console.log('Received an incoming request...');
  res.writeHead(httpStatus.StatusCodes.OK, {
    "Content-Type": "text/html",
  });

  if (routeResponseMap[req.url]) {
    fs.readFile(routeResponseMap[req.url], (error, data) => {
      res.write(data);
      res.end();
    });
  } else {
    console.log('Error:',d)
    fs.readFile(routeResponseMap["/error"], (error, data) => {
      res.write(data);
      res.end();
    });
  }
});
app.listen(port);
console.log('The server has started and is listening on port number:$',{port});





