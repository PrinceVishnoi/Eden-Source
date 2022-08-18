import React from 'react'
import './Form3.css'

export default function Form3(prop) {
  return (
    <>
    <div className='Mainbox'>
      <div className='Firstbox'>
      <img className='avatar1' src={prop.avatar} alt="avtar" />
       <h6 className='Form3Textheading'>{prop.name1}</h6>
       <p className='Form3TextParagraph'>{prop.para1}</p>

      </div>
    </div>
    </>
    
  )
}
