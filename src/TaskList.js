import {useState} from 'react'
import './tasklist.css';

export const TaskList = () => {

  return (
    <>
      <h1 className="s-center">React Task List</h1>
      <p className="s-right">foreact</p>
      <hr/>
      <form className="ed-container task-form">
      <input 
        type="text"
        name="task"
        placeholder="Tasks"
        className="ed-item s-mb-2"
        ></input>
        <button className="button dark-color ed-item">Add</button>
      </form>
      <ul className="feature-list">
      
      </ul>
    </>
  )
}
