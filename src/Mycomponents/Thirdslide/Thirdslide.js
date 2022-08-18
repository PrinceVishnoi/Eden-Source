import React from 'react'
import Eden from '../Eden/Eden'
import Form3 from './Form3/Form3'
import Progressbar3 from './Progressbar3/Progressbar3'
import Text3 from './Text3/Text3'
import Button from '../Button/Button'
import './Thirdslide.css'

export default function Thirdslide() {
  return (
    <div>
      <Eden/>
      <Progressbar3/>
      <Text3/>
      <div className='BothForm'>
      <Form3 name1="For myself" para1="Write better Think more clearly. Stay organized." avatar="https://www.pikpng.com/pngl/m/80-805523_profile-icon-png.png"/>
      <Form3 className="Form3second" name1="With my team" para1="Wikis,docs,tasks & projexts,all in one place." avatar="https://cdn2.iconfinder.com/data/icons/network-communications-glyph/32/avatar_group_team_teamwork-512.png"/>
      </div>
      <Button/>
    </div>
  )
}
