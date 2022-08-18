import React from 'react'
import Eden from '../Eden/Eden'
import Checkmarkcircle from './Checkmarkcircle/Checkmarkcircle'
import Finalprogressbar from './Finalprogressbar/Finalprogressbar'
import FinalText from './FinalText/FinalText'
import Button from '../Button/Button'
import FinalButton from './FinalButton/FinalButton'

export default function Finalpage() {
  return (
    <div>
       <Eden/>
       <Finalprogressbar/>
       <Checkmarkcircle/>
       <FinalText/>
       <FinalButton/>
    </div>
  )
}
