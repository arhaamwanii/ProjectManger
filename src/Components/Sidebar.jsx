import React from 'react'

export const Sidebar = ({formData , switchPage , sendPrev}) => {

    function handleProjectClick(prev){
        switchPage(false)
        sendPrev(prev)
    }
    
    //function to send the data about which button was clicked to the TASK component
    //this function has the data which button was clicked(prev), now we need to pass this data to task
  return (
    <div>
        <h2>YOUR PROJECTS</h2>
        {formData.map((prev , index) => <li key={index}> 
            <button onClick={() => handleProjectClick(prev)}>
                {prev.Title}
            </button>
        </li>)}
    </div>
  )
}


//well there on one side would be perminent while on the other side based on  butto click and instance different components can be seen
//ok we have a button so once we click this button it should change the
//on click of the button the i.e the side bar names 
    //project fillign shit should disappear
    //task filling thing should appear
    //task filling thing should have data which data it has to show

