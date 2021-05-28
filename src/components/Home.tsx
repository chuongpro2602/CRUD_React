import React, { Component } from 'react'
import CreateBookButton from './Project/CreateBookButton';
import { getBook } from "../actions/bookActions";
import { connect } from "react-redux";
import PropTypes from "prop-types"
import BookItem from './Project/BookItem';


interface booka {
    getBook: any;
    book: any
}
class Home extends Component<booka> {


    static propTypes: { book: any; getBook: any; };


    componentDidMount() {
        this.props.getBook();
    }
    render() {
        const { books } = this.props.book
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Book Management</h1>
                            <br />
                            <CreateBookButton />
                            <br />
                            <hr />
                            <div className="container">
                                <h2></h2>
                                <div className="row">
                                    <div className="col-md-12">




                                        <div className="tableContainer">
                                            <div className="panel-heading">


                                            </div>



                                            <table className="table table-striped" id="dev-table" >
                                                <thead className="fixedHeader">
                                                    <tr>

                                                        <th>ID</th>
                                                        <th>Book Name</th>
                                                        <th>Description</th>
                                                        <th>Author</th>
                                                        <th>Numer of Page</th>
                                                        <th>Start</th>
                                                        <th>Return</th>
                                                        <th>Delete</th>
                                                        <th>Update</th>


                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {books.map((book: { id: React.Key | null | undefined; }) => (
                                                        <BookItem key={book.id} book={book} />
                                                    ))

                                                    }


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Book Item Component --> */}

                        </div>
                        {/* <!-- End of Project Item Component --> */}


                    </div>
                </div>
            </div>
        )
    }
}
Home.propTypes = {
    book: PropTypes.object.isRequired,
    getBook: PropTypes.func.isRequired
};
const MapStatetoProps = (state: { book: any; }) => ({
    book: state.book,

});
// connect cho biet vi tri can lay va truyen vao state
export default connect
    (MapStatetoProps, { getBook })(Home);
