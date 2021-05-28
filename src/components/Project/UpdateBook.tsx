import React, { Component } from 'react'
import { createBook, getBook1 } from "../../actions/bookActions"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import classnames from "classnames";

interface myProp {
    id: string,
    author: string,
    bookId: string,
    description: string,
    numOfPage: string,
    bookName: string
    endDate: any,
    startDate: any,
    errors: any
}
interface Propss1 {
    createBook: any,
    history: any,
    getBook1: any,
    match: any
}


class UpdateBook extends Component<Propss1, myProp> {
    static propTypes: { getBook1: PropTypes.Validator<(...args: any[]) => any>; book: PropTypes.Validator<object>; createBook: PropTypes.Validator<(...args: any[]) => any>; errors: PropTypes.Validator<object>; };




    constructor(props: any) {
        super(props);
        this.state = {
            id: "",
            author: "",
            bookId: "",
            bookName: "",
            description: "",
            endDate: "",
            numOfPage: "",
            startDate: "",
            errors: {}
        };

    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
        const {
            id,
            author,
            bookId,
            description,
            numOfPage,
            bookName,
            endDate,
            startDate
        } = nextProps.book;
        this.setState({
            id,
            author,
            bookId,
            description,
            numOfPage,
            bookName,
            endDate,
            startDate
        });
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getBook1(id, this.props.history);
    }
    onChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        let target = e.target as HTMLInputElement;
        this.setState({
            [target.name]: target.value
        } as any);

    }
    onChange1 = (e: any) => {
        this.setState({ description: e.target.value })
    }
    onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        const updateBook = {
            "id": this.state.id,
            "author": this.state.author,
            "bookId": this.state.bookId,
            "bookName": this.state.bookName,
            "description": this.state.description,
            "endDate": this.state.endDate,
            "numOfPage": this.state.numOfPage,
            "startDate": this.state.startDate
        };
        this.props.createBook(updateBook, this.props.history)
    }
    render() {
        const { errors } = this.state;
        return (
            <div>

                <div className="book">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Update Form</h5>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                            className={classnames("form-control form-control-lg", {
                                                "is-invalid": errors.bookName
                                            })}

                                            placeholder="Book Name"
                                            name="bookName"
                                            value={this.state.bookName}
                                            onChange={this.onChange}

                                        />
                                        {errors.bookName && (
                                            <div className="invalid-feedback">{errors.bookName}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" placeholder="Unique Book ID"
                                            name="bookId"
                                            value={this.state.bookId}
                                            onChange={this.onChange}
                                            disabled
                                        />

                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            className={classnames("form-control form-control-lg", {
                                                "is-invalid": errors.author
                                            })}
                                            placeholder="Author"
                                            name="author"
                                            value={this.state.author}
                                            onChange={this.onChange}
                                        />
                                        {errors.author && (
                                            <div className="invalid-feedback">{errors.author}</div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <input type="text"
                                            className={classnames("form-control form-control-lg", {
                                                "is-invalid": errors.numOfPage
                                            })}
                                            placeholder="Num Of Page"
                                            name="numOfPage"
                                            value={this.state.numOfPage}
                                            onChange={this.onChange}
                                        />
                                        {errors.numOfPage && (
                                            <div className="invalid-feedback">{errors.numOfPage}</div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <textarea
                                            className={classnames("form-control form-control-lg", {
                                                "is-invalid": errors.description
                                            })}
                                            placeholder="Description"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.onChange1}

                                        >
                                        </textarea>
                                        {errors.description && (
                                            <div className="invalid-feedback">{errors.description}</div>
                                        )}
                                    </div>
                                    <h6>Start Date</h6>
                                    <div className="form-group">
                                        <input type="date" className="form-control form-control-lg" name="startDate"
                                            value={this.state.startDate}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <h6>Return date</h6>
                                    <div className="form-group">
                                        <input type="date" className="form-control form-control-lg" name="endDate"
                                            value={this.state.endDate}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const MapStatetoProps = (state: { book: { book: any; }; errors: any; }) => ({
    book: state.book.book,
    errors: state.errors
});
UpdateBook.propTypes = {
    getBook1: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    createBook: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default connect(MapStatetoProps, { getBook1, createBook })(UpdateBook);