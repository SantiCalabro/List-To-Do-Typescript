import React from 'react';
import { type Todo as TodoType, type TodoId } from '../types';

interface Props extends TodoType {
    handleRemove: ({ id }: TodoId) => void
    handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ title, completed, id, handleRemove, handleCompleted }) => {
    return (
        <div className="view">
            <input type="checkbox" className="toggle" checked={completed} onChange={(e) => {
                handleCompleted({ id, completed: e.target.checked })
            }} />
            <label>{title}</label>
            <button type="button" className="destroy" onClick={() => { handleRemove({ id }) }} />
        </div>
    )
}


