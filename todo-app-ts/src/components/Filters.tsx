import React from 'react'
import { FILTER_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

//Forma básica
// interface Props{
//     filterSelected: 'Active' | 'Completed' | 'All'
// }

//Mejor esta:
interface Props {
    onFilterChange: (filter: FilterValue) => void
    filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <>
            <ul className="filters">
                {Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = key === filterSelected;
                    const className = isSelected ? 'selected' : ''
                    return (
                        <li key={key}> <a className={className} onClick={e => {
                            e.preventDefault();
                            onFilterChange(key as FilterValue)
                        }} href={href}>{literal}</a> </li>
                    )
                })}
            </ul>
        </>
    )
}