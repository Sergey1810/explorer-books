import React from 'react'
import { IBook } from '../../models/IBook'
import './Book.css'
import logo from '../../logo.svg'
import { useNavigate } from 'react-router-dom'

interface BookProps {
    book: IBook,
}

export const Book: React.FC<BookProps> = ({ book }) => {
    const navigate = useNavigate()

    const handleBook = () => {
        navigate('/book', {
            state: {
                book: book
            }
        })
    }
    return (
        <div className='book' onClick={handleBook}>
            <img className='book__images' src={book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail || logo} alt={book.volumeInfo.title} />
            <span className='book__categories'>{book.volumeInfo.categories}</span>
            <h3 className='book__title'>{book.volumeInfo.title}</h3>
            <span className='book__author'>{book.volumeInfo.authors}</span>
        </div>
    )
}
