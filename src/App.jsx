import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.scss'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('todo')
    const parse = JSON.parse(data)
    if (parse) {
      setTodos([...parse])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos))
  }, [todos])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos((prev) => [...prev, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos((prev) => {
      return prev.filter((v) => v.id !== id)
    })
  }

  const toggleTodoHandler = (id) => {
    setTodos((prev) => {
      return prev.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            isCompleted: !e.isCompleted,
          }
        }
        return { ...e }
      })
    })
  }

  const resetTodoHandler = () => {
    setTodos([])
  }

  const deleteCompleteTodoHandler = () => {
    setTodos((prev) => {
      return prev.filter((e) => e.isCompleted === false)
    })
  }

  const completedTodoCounter = () => {
    const counter = todos.filter((e) => e.isCompleted)
    return counter.length
  }

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodosActions
          completedTodosExist={!!completedTodoCounter()}
          resetTodo={resetTodoHandler}
          deleteTodo={deleteCompleteTodoHandler}
        />
      )}
      <TodoList
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
        todos={todos}
      />
      {!!completedTodoCounter() && (
        <h2>
          You have completed {completedTodoCounter()}{' '}
          {completedTodoCounter() > 1 ? 'todos' : 'todo'}!
        </h2>
      )}
    </div>
  )
}

export default App
