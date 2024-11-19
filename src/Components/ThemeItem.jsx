import React from 'react'
import { MdOutlineInvertColors } from "react-icons/md";

const ThemeItem = ({ id, color, changeColor }) => {
  // Theme Items For color Change
  return (
    <div className='ThemeItem' key={id}>
      <MdOutlineInvertColors style={{ color: color, fontSize: '22px', cursor: 'pointer', transform: 'scale(1.1)' }}
        onClick={() => { changeColor(color) }} />
    </div>
  )
}

export default ThemeItem