import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const course = ['React', 'Angular', 'Vue'];
        const random = Math.floor(Math.random() * course.length);
        return course[random];
    }

  return (
     <p>Let's study {handleNameChange()} </p>
  )
}

export default Content