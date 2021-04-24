import {useState} from 'react'
import './tasklist.css';

export const TaskList = () => {

  const [task, setTask] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleTask = (e) => {
    e.preventDefault();
    const newTask = inputValue
    setTask(()=> [newTask, ...task])
    setInputValue('')
  }

  const handleInputValue = ({target}) => {
    const value = target.value
    setInputValue(value)
  }

  return (
    <>
      <h1 className="s-center">React Task List</h1>
      <p className="s-right">foreact</p>
      <hr/>
      <form className="ed-container task-form" onSubmit={handleTask}>
      <input 
        type="text"
        name="task"
        value={inputValue}
        placeholder="Tasks"
        className="ed-item s-mb-2"
        autoComplete="off"
        onChange={handleInputValue}
        ></input>
        <button className="button dark-color ed-item">Add</button>
      </form>
      <ul className="feature-list">
      {
        task.map(tsk => (
          <li>{tsk}</li>
        ))
      }
      </ul>
    </>
  )
}
