import React from 'react'
import {Forms} from '../Forms/Forms'
import { Link } from 'react-router-dom'
import './Header.css'

interface HeaderProps {
    selectedHandler:(categories:string, sort:string, search:string) => void
}

export const Header: React.FC<HeaderProps> = ({selectedHandler}) => {
    
    return (
        <div className='header'>
            <Link to='/' className='header__link'><h1 className='header__title'>Search for Books</h1></Link>
            <Forms selectedHandler={selectedHandler}/>
        </div>
    )
}
