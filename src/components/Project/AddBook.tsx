import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { createBook } from "../../actions/bookActions"
import classnames from "classnames";


interface States {
    bookName: string,
    author: string,
    bookId: string,
    description: string,
    numOfPage: string,
    endDate: any,
    startDate: any,
    errors: any


}
interface Propss {
    createBook: any,
    history: any
}

class AddBook extends Component<Propss, States> {
    static propTypes: { createBook: PropTypes.Validator<object>; errors: PropTypes.Validator<(...args: any[]) => any>; };
    constructor(props: any) {
        super(props);
        this.state = {

            "author": "",
            "bookId": "",
            "description": "",
            "numOfPage": "",
            "bookName": "",
            "endDate": "",
            "startDate": "",
            "errors": {}
        };

    }
    //life cycle
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    };
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
    onSubmit = (e: any) => {
        e.preventDefault();
        const newBook = {

            "author": this.state.author,
            "bookId": this.state.bookId,
            "description": this.state.description,
            "numOfPage": this.state.numOfPage,
            "bookName": this.state.bookName,
            "endDate": this.state.endDate,
            "startDate": this.state.startDate
        }
        this.props.createBook(newBook, this.props.history)

    }
    render() {
        const { errors } = this.state
        return (
            <div>

                <div className="book">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">

                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
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
                                        <input type="text"
                                            className={classnames("form-control form-control-lg", {
                                                "is-invalid": errors.bookId
                                            })}
                                            placeholder="Unique Book ID"
                                            name="bookId"

                                            value={this.state.bookId}
                                            onChange={this.onChange}
                                        />
                                        {errors.bookId && (
                                            <div className="invalid-feedback">{errors.bookId}</div>
                                        )}
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
                                        <input type="text" className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.numOfPage
                                        })} placeholder="Num Of Page"
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
const MapStatetoProps = (state: { errors: any; }) => ({
    errors: state.errors
});

// propTypes dinh nghia kieu du lieu truyen vao cho component
AddBook.propTypes = {
    createBook: PropTypes.object.isRequired,
    errors: PropTypes.func.isRequired
}

export default connect(
    MapStatetoProps, { createBook }
)(AddBook);