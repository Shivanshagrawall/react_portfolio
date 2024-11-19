import React from 'react'
import './Skill.css'
import { skills } from '../data'
const Skill = () => {
  // Skills Section
  return (
    // Skill
    <div className='skills_box'>
      {skills.map(({ id, title }) => {
        return (
          <div className="skillsName" key={id}>{title}</div>
        )

      })}
    </div>
  )
}

export default Skill