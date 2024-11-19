import React from 'react'
import { stats } from '../data'
import './Statas.css'
const Statas = () => {
  // Stats Section
  return (
    <div className='stats'>
      {stats.map(({ id, no, title }) => {
        // Stats Item
        return (
          <div className="stats_box" key={id}>
            <div className="stats_num">{no}</div>
            <br />
            <div className="stats_title">{title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Statas