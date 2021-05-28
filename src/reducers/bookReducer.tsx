import {GET_BOOKS,GET_BOOK, DELETE_BOOK} from "../actions/types";

const initialState = {
    books: [],
    book: {}
};

export default function(state = initialState, action: { type: any; payload: any; }){
    switch(action.type){
        case GET_BOOKS:
        return {
            ...state,
            books:action.payload
        };
        case GET_BOOK:
            return {
                ...state,
                book:action.payload
            };
        case DELETE_BOOK:
            return {
                ...state,
                books:state.books.filter
                 (
                     (book : any ) => book.bookId !== action.payload
                 )
            };
        
        default:
            return state;
    }
}