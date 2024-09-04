import React from 'react'
import { ListOfTodo, type TodoId, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
    todos: ListOfTodo,
    handleRemove: ({ id }: TodoId) => void,
    handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}


export const Todos: React.FC<Props> = ({ todos, handleRemove, handleCompleted }) => {
    return (
        <div className="todo-list">
            <ul>
                {
                    todos.map(el => (
                        <li key={el.id}>
                            <Todo {...el} handleRemove={handleRemove} handleCompleted={handleCompleted} completed={el.completed} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
