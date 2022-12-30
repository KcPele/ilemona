import React from 'react'
import { dataType } from '../assets/data'

const StartedCard = ({id, title, text }: dataType) => {
  return (
    <div className='startedcard__content flex__wrapper-container'>
        <div className='startedcard__content-header flex__wrapper-container'><span className='flex__wrapper-container'>{id}</span><h4>{title}</h4></div>
        <div className='startedcard__header-text'>
            <p className='app__p'>{text}</p>
        </div>
    </div>
  )
}

export default StartedCard