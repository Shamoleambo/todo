import React from 'react'

interface Todo {
  text: string
  isCompleted: boolean
}

interface TodoProps {
  todo: Todo
  index: number
  completeTodo: (index: number) => void
  removeTodo: (index: number) => void
}

const Todo: React.FC<TodoProps> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
}) => {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className='todo'
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  )
}

export default Todo
