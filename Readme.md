What to Build
    -first need to add a project
    - then we need to be able to name, and description , and ending date to the project 
    - then we have to show a button using which we can save the project 
    - then we have to show the project 
    - and make it show detials about the project when we click on one resepectively 
    - then we should have a delte button in there to delte all of this
    - in each project we should be able to add tasks 
    - then we should also be able to delete these tasks 

Screens to show
    - no projects screen / create a new project
    - screen to create a project 
    - screen to view details of a project and add tasks to it

Building Steps
    - component to recive the input from the user about the project : done
    - now we make an array of objects - 
        - each array contains an 
            -title 
            -discription
            -date
            -array for the tasks
    - show the title of these objects on one side of the screem
    
    - once we click on one of these buttons the  (array that show the   projects )
        - project entering thing should disappear
        - task entering thing should appear
        - send the data with the which button was clicked to the tasks from sidebar(get data from side bar to task which object data to show)
        - display the data recieved in 
            - title
            - date
            - description
            - {section for TASKS}

    - object recieved  in the task - put data from the input field in this array and at the same time show it
        - create an input field recieve the data from the input field 
        - push it into the empty task property in the form data array 
            - how do you push it into the array
                - in the side bar get an index i.e which button has been clicked 
                - get that index to the side bar 
                - get the change form data to the side bar
                - with the help of the index update the formData where you need to 
        - map this array and show it to the user
        - it FUCKING WORKED
    - but a delete button inside of the object map i.e be able
    - make this button go away the value inside of the that had been cliked by i






