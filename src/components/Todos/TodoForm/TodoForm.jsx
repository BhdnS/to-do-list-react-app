import { useState } from 'react'
import Button from '../../UI/Button/Button'
import styles from './TodoForm.module.scss'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (text && text !== ' ') {
      addTodo(text)
      setText('')
    }
  }

  const onChangeHandler = (e) => {
    setText(e.target.value)
  }

  return (
    <form
      className={styles.form}
      action=''
      onSubmit={(e) => onSubmitHandler(e)}
    >
      <input
        className={styles.formInput}
        type='text'
        placeholder='Enter new todo'
        value={text}
        onChange={(e) => onChangeHandler(e)}
      />
      <Button type={'submit'} title={'Submit todo'}>
        Submit
      </Button>
    </form>
  )
}

export default TodoForm
