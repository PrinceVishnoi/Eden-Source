import React from 'react'
import './Form2.css'

export default function Form2() {
  return (
    <div>
    <form className='Form2'>
    <label className='Labelname2' for="fname">Workspace Name</label><br></br>
    <input type="text" className="Name2" name="fname" placeholder='Eden'/><br></br><br></br>
    <label className='Labelname2' for="lname">Workspace URL<span className='optional'>(optional)</span></label><br></br>
    <input type="url" className='url' name="url"placeholder='www.eden.com/ Example'/>
    </form>
   </div>
  )
}
