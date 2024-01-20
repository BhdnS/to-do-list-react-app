import { FaCheck } from 'react-icons/fa'
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import styles from './Todo.module.scss'

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div
      onDoubleClick={() => deleteTodo(todo.id)}
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoItem}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
