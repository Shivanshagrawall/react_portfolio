import React from 'react'
import { personalInfo } from '../data'
const Info = () => {
  return (
    <div>
      {/* Info Section */}
      {personalInfo.map(({ id, title, description }) => {
        return (
          <div className="items" key={id} style={{ margin: "7px" }}>
            {title}:{description}
          </div>
        )
      })}
    </div>
  )
}

export default Info