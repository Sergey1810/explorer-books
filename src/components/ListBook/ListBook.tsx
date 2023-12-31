import React from 'react'
import { Book } from '../Book/Book'
import { IBook } from '../../models/IBook'
import './ListBook.css'

interface ListBookProps {
    books: IBook[],
    moreHandler: () => void,
    error: string,
    totalItems: number
}

export const ListBook: React.FC<ListBookProps> = ({ books, moreHandler, error, totalItems }) => {
    return (
        <section className='listBook'>
            <span className='listBook__totalItem'>{totalItems ? `found ${totalItems} result` : ''}</span>
            <div className='listBook__grid'>
                {error && <span className='listBook__error'>error</span>}
                {(totalItems > 0) && books.map((book, index) => <Book key={index} book={book} />)}
            </div>
            {(totalItems > 0) && books.length > 0 && <button className='listBook__button' onClick={moreHandler}>load more</button>}
        </section>
    )
}
