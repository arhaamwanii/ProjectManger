import React from 'react'

export const Task = ({title , date , description , tasks}) => {
  return (
    <div>
      <h1> the title is {title}</h1>
      <p>{date}</p>
      <p>{description}</p>
      <hr />
      <h2>Tasks</h2>
   
    </div>
  )
}
