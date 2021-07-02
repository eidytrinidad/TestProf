const http = require("http");

const PORT = process.env.port || 4000;

const { getBooks, getBook,getBookPages,getBookPagesByPage } = require("./Controllers/LibraryControllers");

const server = http.createServer((req, res) => {
    
const {url , method} = req
//Route All Books
  if (url === "/api/books" && method === "GET") {

    getBooks(req, res);

  } 

//Route Page by Number
  else if (url.match(/\/api\/books\/([0-9]+)\/pages\/([0-9]+)/) && method === "GET") {

    const id = url.split("/")[3];
    const pageNumber = url.split("/")[5];
    getBookPagesByPage(req, res, id,pageNumber);

  } 

  //Route All Pages
  else if (url.match(/\/api\/books\/([0-9]+)\/pages/) && method === "GET") {

    const id = url.split("/")[3];
    console.log(id)
    getBookPages(req, res, id);

  }

    //Route get a book
  else if (url.match(/\/api\/books\/([0-9]+)/) && method === "GET") {

    const id = url.split("/")[3];
    getBook(req, res, id);

  } 

  //Not Found
   else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ Message: "route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
