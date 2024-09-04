import React from 'react'
import { useState } from 'react'
import { Todos } from './components/Todos';
import './index.css'
import { type TodoId, type Todo as TodoType, type FilterValue, TodoTitle } from './types';
import { TODO_FILTERS } from './consts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';


function App(): JSX.Element {
  const mockToDos = [
    {
      id: "1",
      title: 'To do 1',
      completed: false
    },
    {
      id: "2",
      title: 'To do 2',
      completed: false
    },
    {
      id: "3",
      title: 'To do 3',
      completed: false
    }
  ]
  const [toDos, setToDos] = useState(mockToDos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemove = ({ id }: TodoId): void => {
    const newList = toDos.filter(el => el.id !== id);
    setToDos(newList);
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {

    const newToDos = toDos.map(el => {
      if (el.id === id) {
        return {
          ...el,
          completed
        }
      }
      return el
    })
    setToDos(newToDos);
  }
  const activeCount = toDos.filter(todo => !todo.completed).length;
  const completedCount = toDos.length - activeCount;

  const filteredTodos = toDos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo
  })
  const handleRemoveCompleted = (): void => {
    const newTodos = toDos.filter(todo => !todo.completed);
    setToDos(newTodos);
  }
  const handleAddToDo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }
    const newTodos = [...toDos, newTodo]
    setToDos(newTodos);
  }

  return (
    <>
      <div className="todoapp">
        <Header onAddToDo={handleAddToDo} />
        <Todos
          todos={filteredTodos}
          handleRemove={handleRemove}
          handleCompleted={handleCompleted}
        />
        <Footer
          onClearComplete={handleRemoveCompleted}
          filterSelected={filterSelected}
          completedCount={completedCount}
          handleFilterChange={handleFilterChange}
          activeCount={activeCount}

        />
      </div>
    </>
  )
}

export default App
