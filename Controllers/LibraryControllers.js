const Library= require("../Models/LibraryModel")


//Get all books
async function getBooks(req,res) {
    
    try {
        const books=await Library.findAllBooks()
        res.writeHead(200,{"Content-Type":"application/json"})

        res.end(JSON.stringify(books))
    } catch (error) {
        console.log(error)
    }
}

// Get a single book
async function getBook(req,res,id) {
    
    try {
        const book=await Library.findBookById(id)
        
        if (!book) {
            res.writeHead(404,{"Content-Type":"application/json"})
            res.end(JSON.stringify({Message:'Book Not Found'}))
        } else {
            res.writeHead(200,{"Content-Type":"application/json"})
            res.end(JSON.stringify(book))
           
        }

     
    } catch (error) {
        console.log(error)
    }
}

// Get book pages
async function getBookPages(req,res,id) {
    
    try {
        const pages=await Library.findBookPages(id)
      console.log(pages)

        if (!pages) {
            res.writeHead(404,{"Content-Type":"application/json"})
            res.end(JSON.stringify({Message:'Pages Not Found'}))
        } else {
           
            res.writeHead(200,{"Content-Type":"application/json"})
            res.end(JSON.stringify(pages))
           
        }
     
    } catch (error) {
        console.log(error)
    }
}

// Get bookpage By page
async function getBookPagesByPage(req,res,id,pageNumber) {
    
    try {
        const page=await Library.findBookPagesByPage(id,pageNumber)


        if (!page) {
            res.writeHead(404,{"Content-Type":"application/json"})
            res.end(JSON.stringify({Message:'Page Not Found'}))
        } else {
           
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(`<p>${page}</p>`)
           
        }

     
    } catch (error) {
        console.log(error)
    }
}

module.exports={getBooks,getBook,getBookPages,getBookPagesByPage}