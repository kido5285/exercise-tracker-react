import React from 'react'

const BaseFilter = ({onUpdate, currFil}) => {
  return (
    <nav className='filter-nav'>
        <button onClick={() => onUpdate('all')} className={currFil === 'all' ? 'active' : ''}>View All</button>
        <button onClick={() => onUpdate('completed')} className={currFil === 'completed' ? 'active' : ''}>View Completed</button>
        <button onClick={() => onUpdate('pending')} className={currFil === 'pending' ? 'active' : ''}>View Pending</button>
    </nav>
  )
}

export default BaseFilter