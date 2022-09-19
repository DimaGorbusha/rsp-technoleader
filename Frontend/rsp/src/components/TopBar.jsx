import React from 'react'
import topBarLogo from '../img/topBarLogo.svg'

export default function TopBar(props) {
  return (
    <div className='flex'>
        <img src={topBarLogo} alt=""/>
        <h1>props.name</h1>
    </div>
  )
}
