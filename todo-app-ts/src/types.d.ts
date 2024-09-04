import { TODO_FILTERS } from "./consts"
export interface Todo {
    id: string
    title: string
    completed: boolean
}
export type ListOfTodo = Todo[]
// Esta ténica sirve para definir en un solo lugar el tipo de una variable, asegurando su escalabilidad. 
// Si por alguna razón yo tengo que hacer que ID en vez de ser un number sea un string, tendría que ir cambiando
// una por una su definición en cada lugar de la app en que se esté aplicando. 
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]


