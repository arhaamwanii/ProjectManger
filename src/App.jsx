import React from 'react';
import { useState } from 'react';
import { Input } from './Components/Input';
import { Sidebar } from './Components/Sidebar';
import { Task } from './Components/Task';

function App() {
  const [formData , setFormData] = useState([
      // Title : "",
      // Description: "",
      // Date: "",
      // Tasks: [
      //     "Task 1" , "Task 2" , "...."
      // ]
  ])
  const [pageChoose , setPageChoose] = useState(true)
  const [sendPrev , setSendPrev ] = useState()

  return (
    <>
      <div >
        <Sidebar sendPrev={setSendPrev} switchPage={setPageChoose} formData={formData}/>
        <br />
        <br />
        {pageChoose ? <Input formData={formData} setFormData={setFormData} /> : <Task title={sendPrev.Title} date={sendPrev.Date} description={sendPrev.Description}  tasks={sendPrev.Tasks} setFormData={setFormData} />}
      </div>
    </>
  );
}

export default App;

