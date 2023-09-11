import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchBooks } from './store/reducers/ActionCreators'
import { Route, Routes } from 'react-router-dom';
import { ListBook } from './components/ListBook/ListBook';
import { BookPage } from './components/BookPage/BookPage';
import Preloader from './components/Preloader/Preloader';
import { IBook } from './models/IBook';

interface Search {
  categories: string,
  sort: string,
  search: string
}

function App() {
  const dispatch = useAppDispatch()
  const { books, isLoading, error } = useAppSelector(state => state.bookReducer)
  const [search, setSearch] = useState<Search>()
  const [more, setMore] = useState(0)
  const [massive, setMassive] = useState<IBook[]>()

  const moreHandler = () => {
    const num = more + 30
    setMore(more + 30)
    dispatch(fetchBooks(search?.categories || '', search?.sort || '', search?.search || '', String(num)))
    setMassive([...massive || books.items, ...books.items])
    console.log(books)
  }

  const selectHandler = (categories: string, sort: string, search: string) => {
    setSearch({
      categories: categories,
      sort: sort,
      search: search
    })
    dispatch(fetchBooks(categories, sort, search, String(0)))
    setMassive(books.items)
  }

  return (
    <div className="App">
      <Header selectedHandler={selectHandler} />
      {isLoading && <Preloader />}
      <Routes>
        <Route path='/' element={<ListBook moreHandler={moreHandler} books={massive || books.items} totalItems={books.totalItems} error={error} />} />
        <Route path='/book' element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
