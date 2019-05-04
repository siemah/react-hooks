import React from 'react'
import {Link } from 'react-router-dom'

const Block = (props) => {
  return (
    <div className='block'>
      <Link to='/contact'>got to contact</Link>
    </div>
  )
}

export default Block;