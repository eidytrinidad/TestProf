const Library=require("../database/books")
const BookPages = require('../database/BookPages');

//Get All Books
function findAllBooks() {
    return new Promise((resolve,reject)=>{
        const books=Library.map(book=>(  {
                Id:book.Id,
                Title:book.Title,
                Author:book.Author,

            }
        ))
       
        resolve(books)
    })
}

//Get Book By ID
function findBookById(id) {
    
    return new Promise((resolve,reject)=>{
        const book=Library.find(b=>b.Id===Number(id))
    
        resolve(book)
    })
}

//Get All pages
function findBookPages(id) {
    
    return new Promise((resolve,reject)=>{
     
        const book= BookPages.find(p=>p.Id===Number(id)&& p)
        resolve(book?.Pages)
    })
}

//Get Pages by Page
function findBookPagesByPage(id,pageNumber) {
    return new Promise((resolve,reject)=>{
        const book= BookPages.find(p=>p.Id===Number(id)&& p)
        resolve(book?.Pages[pageNumber])
    })
}
module.exports={
    findAllBooks,
    findBookById,
    findBookPages,
    findBookPagesByPage
}