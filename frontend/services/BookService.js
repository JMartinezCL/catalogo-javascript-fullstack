class BookService {
    constructor(){
        this.URI = 'http://localhost:3000/api/books';

    }

    async getBooks(){
        const response = await fetch(this.URI);
        const books = response.json();
        return books;
    }

    async postBook(book){
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = res.json();
    }

    async deleteBook(bookId){
        const response = await fetch('${this.URI}/${bookId}', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data);
    }
}

export default BookService;