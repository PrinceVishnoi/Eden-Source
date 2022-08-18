import React from 'react'
import './ProgressBar.css'

export default function ProgressBar() {
  return (
    <div>
       <div className='list'>
        <ul className="progressbar">
          <li><div className='Firstlist1'><span className='Numbers'>1</span></div></li>
          <div className='FirstLine1'></div>
          <li><div className='Firstlist2'><span className='Numbers'>2</span></div></li>
          <div className='FirstLine2'></div>
          <li><div className='Firstlist3'><span className='Numbers'>3</span></div></li>
          <div className='FirstLine3'></div>
          <li><div className='Firstlist4'><span className='Numbers'>4</span></div></li>
        </ul>
      </div>
    </div>
  )
}
