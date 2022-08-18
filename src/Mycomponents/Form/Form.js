import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <div>
     <form className='Form'>
     <label className='Labelname' for="fname">Full Name</label><br></br>
     <input type="text" className="Name" name="fname" placeholder='Steve Jobs'/><br></br><br></br>
     <label className='Labelname' for="lname">Display Name</label><br></br>
     <input type="text" className="Name" name="lname" placeholder='Steve'/>
     </form>
    </div>
  )
}
