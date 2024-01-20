import Todo from '../Todo/Todo'
import styles from './TodoList.module.scss'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            key={todo.id}
            todo={todo}
          />
        ))
      )}
    </div>
  )
}

export default TodoList
