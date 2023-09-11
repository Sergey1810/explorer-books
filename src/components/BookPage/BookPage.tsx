import React from 'react'
import { useLocation } from 'react-router-dom'
import './BookPage.css'


export const BookPage: React.FC = () => {
    const location = useLocation()
    let book = location.state.book
    return (
        <main>
            <section className='bookPage'>
                <div className='bookPage__block-image'>
                    <img className='bookPage__image' src={book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                </div>
                <div className='bookPage__info'>
                    <p className='bookPage__categories'>{book.volumeInfo.categories}</p>
                    <h2 className='bookPage__title'>{book.volumeInfo.title}</h2>
                    <p className='bookPage__authors'>{book.volumeInfo.authors}</p>
                    <p className='bookPage__description'>{book.volumeInfo.description}</p>
                </div>
            </section>
        </main>
    )
}
