import { Book } from "./Book"

export const BookList = (proops) => {
    return (
        <ol>
            <Book 
            title = {proops.books[0].title}
            author = {proops.books[0].author}
            price = {proops.books[0].price}
            />
            
            <Book 
            title = {proops.books[1].title}
            author = {proops.books[1].author}
            price = {proops.books[1].price}
            />

            <Book 
            title = {proops.books[2].title}
            author = {proops.books[2].author}
            price = {proops.books[2].price}
            />
        </ol>
    )
}