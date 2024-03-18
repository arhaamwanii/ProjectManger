import React, { useRef, useState } from 'react'

export const Input = ({formData , setFormData}) => {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const dateRef = useRef()

    function handleSave(){
        const newInstance = {
            Title: titleRef.current.value ,
            Description : descriptionRef.current.value,
            Date: dateRef.current.value,
            Tasks: [
                ""
            ]
        }
        setFormData([...formData, newInstance]);
        
        titleRef.current.value = ""
        descriptionRef.current.value = ""
        dateRef.current.value = ""
    }
 console.log(formData)


    return (
    <div>
        <div>
        <button>Cancel </button>
        <button onClick={handleSave} >Save </button>
        </div>

        <div>
            <label htmlFor="project-title">TITLE</label>
            <input ref={titleRef} id='project-title' type="text" />
        </div>
        <div>
            <label  htmlFor="project-des">DESCRIPTION</label>
            <input ref={descriptionRef} id='project-des' type="text" />
        </div>
        <div>
            <label htmlFor="project-date">DUE DATE</label>
            <input ref={dateRef} id='project-date' type="date" />
        </div>
        
    </div>
  )
}


