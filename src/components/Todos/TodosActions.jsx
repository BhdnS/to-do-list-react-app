import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.scss'

const TodosActions = ({ resetTodo, deleteTodo, completedTodosExist }) => {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodo} title={'Reset todos'}>
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteTodo}
        disabled={!completedTodosExist}
        title={'Clear completed todos'}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
