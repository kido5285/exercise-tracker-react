import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateExercise = () => {
  const [exercise, setExercise] = useState({
    title: '',
    details: ''
  })

  const onchange = (e) => {
    setExercise({
      ...exercise,
      [e.target.name]: e.target.value
    })
  }

  let navigator = useNavigate();

  const create = (e) => {
    e.preventDefault();
    const newExercise = {
      title: exercise.title,
      details: exercise.details,
      completed: false,
      id: Math.floor(Math.random() * 10000)
    }
    fetch('http://localhost:3111/create', {
      method: "POST", 
      body: JSON.stringify(newExercise),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      navigator('/home');
    }).catch(e => console.log(e))
  }

  return (
    <form onSubmit={create}>
      <label>Title</label>
      <input type="text" name='title' onChange={onchange} value={exercise.title} maxLength='15' required/>
      <label>Details</label>
      <textarea name='details' cols="30" rows="10" value={exercise.details} onChange={onchange} required></textarea>
      <button type="submit">Create</button>
    </form>
  )
}

export default CreateExercise;