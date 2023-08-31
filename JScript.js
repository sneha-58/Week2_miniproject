let bookArray=[];
function bookDetails()
{
let numberOfBooks=prompt("Enter the number of books: ");
function bookAdd()
{
    title=prompt("Enter book name: ");
    author=prompt("Enter author name :");
    yearPublished=prompt("year published : ");
    bookArray.push([title,author,yearPublished]);
    return "Title of the book : "+title+" \nAuthor of the book : "+author+" \nYear Published : "+yearPublished;
};

for(let i=0;i<numberOfBooks;i++)
{
    document.write(bookAdd()+"<br/>");
}
document.write("Book Collection : ");
for(let i in bookArray)
{
    document.write("--->"+bookArray[i]+"<br>");
}
};


function addBook(){
    let new_book_title=prompt("Enter the title of the book to be added");
    let new_book_author=prompt("Enter the author of the book to be added");
    let new_book_yearPublished=prompt("Enter the year published of the book to be added");
    let new_array=[new_book_title,new_book_author,new_book_yearPublished];
    bookArray.push(new_array);
    document.write("book array after adding new book : "); 
    for(let key in bookArray)
    {
        document.write("--->"+bookArray[key]+"<br/>");
    }
};


function removeLastBook()
{
    let popedElement=bookArray.pop();
    document.write("After removing last book : "+"<br/>");
    for(let k in bookArray)
    {
        document.write("--->"+bookArray[k]+"<br/>");
    }
    document.write("removed element: "+"<br/>");
    document.write(popedElement+"<br/>");
};


function addBookToFront()
{
    document.write("shift..."+"<br/>");
    bookArray.unshift(["sirus","mahesh","2019"]);
    for(let k in bookArray)
    {
        document.write("--->"+bookArray[k]+"<br/>");
    }
};


let titleArray=[];
function getAllTitles()
{
    titleArray=bookArray.map((firstElement)=>{
            return firstElement[0];
    });
    for(let k in titleArray)
    {
        document.write("Title :--->"+titleArray[k]+"<br/>");
    }
}


let searchByAuthor=[];
function getBooksByAuthor()
{
    let enterAuthor=prompt("Enter valid author name to get the book details : ");
    document.write("book details of the author : "+"<br/>");
    searchByAuthor=bookArray.filter((authorSearch)=>{
        if(authorSearch[1]==enterAuthor)
        {
            return bookArray;
        }
    });
    document.write(searchByAuthor+"<br/>");
}


let searchByYear=[];
function getTotalBooksPublishedBefore()
{
    let getYear=prompt("Enter the year to fetch the data of the books that are published before : ");
    document.write("Books published before "+getYear+" : "+"<br/>");
    searchByYear=bookArray.filter(y=>y[2]<getYear);
    document.write(searchByYear+"<br/>");
};


let removeBook=[];
function removeBookByTitle()
{
    let bTitle=prompt("Enter the title of the book to be removed : ");
    let index=bookArray.indexOf(bTitle);
    removeBook=bookArray.splice(index,1);
    document.write("book removed :"+"<br/>");
    document.write(removeBook+"<br/>");
    document.write("Now the book array contains : "+"<br/>");
    if(!bookArray.includes(removeBook))
    {
        document.write(bookArray+"<br/>");
    }
};


let subLib=[];
function getSubLibrary()
{
    let start=prompt("enter the start index to get the sub Library element : ");
    let end=prompt("Enter the stop index to get the sub library elements : ");
    document.write("The sub library with strat index "+start+" and stop index "+end+" is : "+"<br/>");
    subLib=bookArray.slice(start,end);
    for(let k in subLib)
    {
        document.write("["+subLib[k]+"]"+" , "+"<br/>");
    }
};