import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditExercise = () => {
  const [exercise, setExercise] = useState({
    title: '',
    details: ''
  })
  const params = useParams();
  const id = params.id;
  const onchange = (e) => { 
    setExercise({
      ...exercise,
      [e.target.name]: e.target.value
    })
  }

  let navigator = useNavigate();

  useEffect(() => {
    fetch(`https://node-api091.herokuapp.com/${id}`).then(res => res.json()).then(data => {
        setExercise({
            title: data.title,
            details: data.details
        })
    }).catch(e => console.log(e));
  }, [id])

  const edit = (e) => {
    e.preventDefault();
    fetch(`https://node-api091.herokuapp.com/edit/${id}`, {
      method: "POST", 
      body: JSON.stringify(exercise),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      navigator('/home');
    }).catch(e => console.log(e))
  }

  return (
    <form onSubmit={edit}>
      <label>Title</label>
      <input type="text" name='title' onChange={onchange} value={exercise.title} maxLength='15' required/>
      <label>Details</label>
      <textarea name='details' cols="30" rows="10" value={exercise.details} onChange={onchange} required></textarea>
      <button type="submit">Edit</button>
    </form>
  )
}

export default EditExercise;