import axios from "axios";
import { DELETE_BOOK, GET_BOOK, GET_BOOKS, GET_ERRORS } from "./types";

export const createBook = (book: any, history: string[]) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    try {
        const res = await axios.post
            ("http://localhost:8080/api/book", book)
        history.push("/home");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data

        })

    }
};

//get all book
export const getBook = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    const res = await axios.get("http://localhost:8080/api/book/all")
    dispatch({
        type: GET_BOOKS,
        payload: res.data
    });
};
//get book theo id
export const getBook1 = (id: any, history: string[]) => async (dispatch: (arg0: { type: any; payload: any; }) => void) => {

    try {
        const res = await axios.get(`http://localhost:8080/api/book/${id}`)
        dispatch({
            type: GET_BOOK,
            payload: res.data
        });
    } catch (error) {
        history.push("/home")
    };

};
// delete theo id
export const deleteBook = (id: any) => async (dispatch: any) => {
    await axios.delete(`http://localhost:8080/api/book/${id}`)
    dispatch({
        type: DELETE_BOOK,
        payload: id
    });
}
