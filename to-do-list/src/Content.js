import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const course = ['React', 'Angular', 'Vue'];
    const random = Math.floor(Math.random() * course.length);
    return course[random];
  }

  return (
    <main>
      <p>Let's study {handleNameChange()} </p>
    </main>
  )
}

export default Content