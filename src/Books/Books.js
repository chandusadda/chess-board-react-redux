import React from 'react';
import './Books.css';
import totalBooks from '../data/books.json';

class Books extends React.Component {
    constructor(props) {
                super(props)
    }
    state = {
        header: <thead id="header">
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Subject</th>
                        <th scope="col">publication Year</th>
                        <th scope="col">Issue</th>
                    </tr>
                </thead>,
        books: []
    };

    componentDidMount() {
        this.setState({  books: totalBooks })
    }

    viewBook = (book) => { console.log('viewBook', book)}

    render() {
        const {books, header} = this.state;
        return (
            <div id='books'>
                <span id="heading">AVAILABLE BOOKS</span>
                <table id="results" className="table text-center table-hover">
                    {header}
                    <tbody>
                    { totalBooks.books.map(
                            book => {
                                    return <tr key={book.id}>
                                                <td>{book.bookName.toUpperCase()}</td>
                                                <td>{book.author}</td>
                                                <td>{book.subject}</td>
                                                <td>{book.publicationYear}</td>
                                                <td id={book.id} onClick={this.viewBook}>{book.issue}</td>
                                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Books;