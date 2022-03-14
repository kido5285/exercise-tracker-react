import React from 'react'
import { Link } from 'react-router-dom';

const ExerciseItem = ({exercise, onDeleteExercise, toggleHandler}) => {
    const deleteExercise = () => {
        fetch(`https://corsanywhere.herokuapp.com/https://node-backend091.herokuapp.com/delete`, {
            method: 'POST',
            body: JSON.stringify({
                'id': exercise.id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            onDeleteExercise(exercise.id);
        })
    }

    const toggleExercise = () => {
        fetch(`https://corsanywhere.herokuapp.com/https://node-backend091.herokuapp.com/update`, {
            method: 'POST', 
            body: JSON.stringify({
                'id': exercise.id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            toggleHandler(exercise.id);
        })
    }
    let classes = ['exercise'];
    if(exercise.completed){
        classes.push('complete');
    }
    return (
      <div className={classes.join(' ')}>
          <div className='actions'>
              <h4>{exercise.title}</h4>
              <div className='buttons'>
                  <button onClick={deleteExercise}>Delete</button>
                  <Link to={`/${exercise.id}/edit-exercise`}>
                      Edit
                  </Link>
                  <button onClick={toggleExercise}>Toggle</button>
              </div>
          </div>
          <div className='details'>
              <p>{exercise.details}</p>
          </div>
      </div>
    )
}

export default ExerciseItem