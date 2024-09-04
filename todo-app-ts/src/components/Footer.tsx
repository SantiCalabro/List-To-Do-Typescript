import React from 'react';
import { Filters } from './Filters';
import { type FilterValue } from '../types';


type Props = {
    activeCount: number,
    completedCount: number
    onClearComplete: () => void
    handleFilterChange: (filter: FilterValue) => void
    filterSelected: FilterValue
}

export const Footer: React.FC<Props> = ({
    activeCount,
    completedCount,
    filterSelected,
    onClearComplete,
    handleFilterChange
}) => {

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{activeCount}</strong>Tareas pendientes</span>
            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 &&
                <button
                    className='clear-completed'
                    onClick={onClearComplete}
                >Borrar completados</button>
            }
        </footer>
    )
}