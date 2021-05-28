import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteBook } from "../../actions/bookActions";

interface bookb {
    book: any;
    deleteBook: any

}
class BookItem extends Component<bookb> {
    onDeleteClick = (id: any) => {
        this.props.deleteBook(id);
    };
    static propTypes: { deleteBook: PropTypes.Validator<(...args: any[]) => any>; };

    render() {
        const { book } = this.props;
        return (
            <tr>
                <td>{book.bookId}</td>
                <td>{book.bookName}</td>
                <td>{book.description}</td>
                <td>{book.author}</td>
                <td>{book.numOfPage}</td>
                <td>{book.startDate}</td>
                <td>{book.endDate}</td>
                <td><button className="btn btn-warning" onClick={this.onDeleteClick.bind(this, book.bookId)}>Delete</button></td>
                <td><Link to={`/updateBook/${book.bookId}`}><button className="btn btn-primary">Update</button></Link></td>
            </tr>
        );
    }
}
BookItem.propTypes = {
    deleteBook: PropTypes.func.isRequired
};


export default connect(null, { deleteBook })(BookItem);