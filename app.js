const http = require("http");

const PORT = process.env.port || 4000;


const { getBooks, getBook,getBookPages,getBookPagesByPage } = require("./Controllers/LibraryControllers");

const server = http.createServer((req, res) => {
    
const {url , method} = req


//Route All Books
  if (url === "/api/books" && method === "GET") {

    getBooks(req, res);


  } 

//Route Page by Number and text/html
  else if (url.match(/\/api\/books\/([0-9]+)\/pages\/([0-9]+)\/html/) && method === "GET") {

    const id = url.split("/")[3];
    const pageNumber = url.split("/")[5];
    const format=url.split("/")[6];
    getBookPagesByPage(req, res, id,pageNumber,format);
   
  } 

  //Route Page by Number and format text/plain
  else if (url.match(/\/api\/books\/([0-9]+)\/pages\/([0-9]+)\/plain/) && method === "GET") {

    const id = url.split("/")[3];
    const pageNumber = url.split("/")[5];
    const format=url.split("/")[6];
    getBookPagesByPage(req, res, id,pageNumber,format);
   
  } 


  //Route All Pages
  else if (url.match(/\/api\/books\/([0-9]+)\/pages/) && method === "GET") {

    const id = url.split("/")[3];

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
