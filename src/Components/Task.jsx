import React, { useRef, useState } from 'react';

export const Task = ({ title, date, description, tasks, setFormData, index, formData }) => {
  const taskInput = useRef();
  const [input, setInput] = useState(''); // Initialize input to empty string

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleTaskInput(index) {
    setFormData((prevFormData) => {
      return prevFormData.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            Tasks: [...item.Tasks, input],
          };
        }
        return item;
      });
    });
    taskInput.current.value = ""
  }

  console.log(index);
  console.log(input);
  console.log(formData);

  // FUNCTION TO DELETE THE OBJECT
  function deleteObj(){
    formData.splice(index , 1)
    console.log(formData)
  }

  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Date: {date}</p>
      <p>Description: {description}</p>
      <hr />
      <h2>Tasks</h2>
    
    <button onClick={deleteObj}>Delte Project</button>

      <div>
        <input onChange={handleInput} type="text" ref={taskInput} />
        <button onClick={() => handleTaskInput(index)}>Add Task</button>
      </div>
      {formData[index].Tasks.map((currentValues , indexTask)  => (
        <li>
          {currentValues}
        </li> 
        
        
        // <li key={currentValues.id || Math.random()}>  {/* Add unique key for better performance */}
        //   {/* Access specific properties within currentValues here */}
        //   {currentValues.Tasks.map((task) => (
        //     <p key={task.id || Math.random()}>{task}</p>
        //   ))
        //   }
        // </li>

      ))}
    </div>
  );
};
