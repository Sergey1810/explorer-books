import axios from "axios";
import { AppDispatch } from "..";
import { IBooks } from "../../models/IBooks";
import { booksSlice } from "./BooksSlice";


export const fetchBooks = (categories:string, sort:string, search:string, more:string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(booksSlice.actions.booksFetching())
        const response = await axios.get<IBooks>(`https://www.googleapis.com/books/v1/volumes?q=${search}${(categories!=='all')?`+subject:${categories}`:''}&orderBy=${sort}&startIndex=${more}&maxResults=30&key=AIzaSyAXV1gEB_xPzskoGy69ysIAV7t2dXsPXlU`)
        dispatch(booksSlice.actions.booksFetchingSuccess(response.data))
    } catch (e) {
        dispatch(booksSlice.actions.booksFetchingErrors(`При загрузке данных произошла ошибка`))
    }
}