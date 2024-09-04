import React from 'react'
import { TodoTitle } from '../types'
import { CreateToDo } from './CreateToDo'
interface Props {
    onAddToDo: (title: TodoTitle) => void
}
export const Header: React.FC<Props> = ({ onAddToDo }) => {
    return (
        <header className="header">
            <h1>To Do <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibvGxTGnj41kZUICPvw2ZtVhHK14sa3JC1g&s" alt="Header" style={{ width: '60px', height: 'auto' }} /></h1>
            <CreateToDo saveTodo={onAddToDo} />
        </header>
    )
}