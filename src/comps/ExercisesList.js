import React from 'react'
import ExerciseItem from './ExerciseItem';

const ExercisesList = ({exercises, deleteExerciseHandler, toggleHandler}) => {
    if(exercises.length===0) return null;

    return (
      <div className='exercises-list'>
          {exercises.map(exercise => (
              <ExerciseItem onDeleteExercise={deleteExerciseHandler} toggleHandler={toggleHandler} key={exercise.id} exercise={exercise}/>
          ))}
      </div>
    )
}

export default ExercisesList