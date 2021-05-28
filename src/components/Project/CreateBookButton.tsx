import React from 'react'
import {Link} from "react-router-dom"


const CreateBookButton = () => {
    return    (
        <React.Fragment>
     {/* thay the the div */}
     <Link to="/addBook" 
          className="btn btn-lg btn-info">
      Create a Book
     </Link>
     </React.Fragment>
    )
};
export default CreateBookButton;
