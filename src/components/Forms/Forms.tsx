import React, { useState } from 'react'
import './Forms.css'

interface FormProps {
    selectedHandler: (categories: string, sort: string, search: string) => void
}

export const Forms: React.FC<FormProps> = ({ selectedHandler }) => {

    const [selectedOption, setSelectedOption] = useState('all');
    const [selectedOptionSort, setSelectedOptionSort] = useState('relevance');
    const [search, setSearch] = useState('')

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        selectedHandler(selectedOption, selectedOptionSort, search)
    }

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const selectChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionSort(event.target.value);
    };

    return (
        <form className='forms' onSubmit={submitHandler}>
            <input type="text" value={search} onChange={inputChange} placeholder='Search' className='forms__input' />
            <div className='forms__block'>
                <span className='forms__label'>Categories</span>
                <select onChange={selectChange} className='forms__select' defaultValue={"all"}>
                    <option value={"all"}>all</option>
                    <option value={"art"}>art</option>
                    <option value={"biography"}>biography</option>
                    <option value={"computers"}>computers</option>
                    <option value={"history"}>history</option>
                    <option value={"medical"}>medical</option>
                    <option value={"poetry"}>poetry</option>
                </select>
                <span className='forms__label'>Sorting by</span>

                <select onChange={selectChangeSort} className='forms__select' defaultValue={"relevance"}>
                    <option value={"relevance"} >relevance</option>
                    <option value={"newest"}>newest</option>
                </select>
            </div>
            <button className='forms__button'>Search</button>
        </form>
    )
}
