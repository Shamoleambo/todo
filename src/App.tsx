import { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { text: 'Do stuff', isCompleted: false },
    { text: 'Make stuff', isCompleted: false },
    { text: 'Gumber the lomb', isCompleted: false },
  ])

  const completeTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, isCompleted: false }]
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <h1>Todo List</h1>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
