import React, { useRef } from 'react'

export const Task = ({title , date , description , tasks , setFormData }) => {
  const taskInput = useRef()

  function handleTaskInput(){
    ""
  }

  return (
    <div>
      <h1> the title is {title}</h1>
      <p>{date}</p>
      <p>{description}</p>
      <hr />
      <h2>Tasks</h2>
      <div >
        <input type="text" ref={taskInput} />
        <button onClick={handleTaskInput}>Add Task</button>
      </div>
    </div>
  )
}

