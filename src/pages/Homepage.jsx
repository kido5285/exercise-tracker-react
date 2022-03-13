import React, { useState, useEffect } from 'react'
import ExercisesList from '../comps/ExercisesList';
import BaseFilter from "../comps/BaseFilter";

const Homepage = () => {
  const [exercises, setExercises] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');

  const updateFilter = (newFil) => {
    setCurrentFilter(newFil);
  }

  async function fetchExercises(){
      try {
          const res = await fetch('http://localhost:3111');
          const data = await res.json();
          setExercises(data);
          console.log(data);
      } catch (error) {
          console.error(error)
      }
  }
  useEffect(() => {
    fetchExercises();
  }, [])
  const deleteExerciseHandler = (id) => {
      setExercises(exercises.filter(exercise => id !== exercise.id));
  }

  const toggleHandler = (id) => {
      const clonedExercises = [...exercises];
      const index = clonedExercises.findIndex(exer => exer.id === id);
      const clicked = clonedExercises[index];
      clicked.completed = !clicked.completed;
      setExercises(clonedExercises);
  }

  let jsx = (
    <ExercisesList deleteExerciseHandler={deleteExerciseHandler} toggleHandler={toggleHandler} exercises={exercises}/>
  )
  if(currentFilter === 'completed'){
    jsx = <ExercisesList deleteExerciseHandler={deleteExerciseHandler} toggleHandler={toggleHandler} exercises={exercises.filter(exercise => exercise.completed)}/>
  } else if(currentFilter === 'pending'){
    jsx = <ExercisesList deleteExerciseHandler={deleteExerciseHandler} toggleHandler={toggleHandler} exercises={exercises.filter(exercise => !exercise.completed)}/>
  }
  return (
    <div>
        <BaseFilter onUpdate={updateFilter} currFil={currentFilter}/>
        {jsx}
    </div>
  )
}

export default Homepage