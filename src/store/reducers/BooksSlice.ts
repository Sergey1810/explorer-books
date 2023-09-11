import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../models/IBooks";

interface BookState {
    books: IBooks;
    isLoading: boolean;
    error: string;
}

const initialState: BookState = {
    books: {
        kind: '',
        totalItems: 0,
        items: [
            {
                id: '',
                selfLink: '',
                volumeInfo: {
                    id:'',
                    title: '',
                    authors: [],
                    previewLink: '',
                    imageLinks:{
                        thumbnail:'',
                        smallThumbnail:''
                    },
                    description:'',
                    categories:['']
                }
            }
        ]
    },
    isLoading: false,
    error: ''
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        booksFetching(state) {
            state.isLoading = true;
        },
        booksFetchingSuccess(state, action: PayloadAction<IBooks>) {
            state.isLoading = false;
            state.error = '';
            state.books = action.payload;
        },
        booksFetchingErrors(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default booksSlice.reducer;