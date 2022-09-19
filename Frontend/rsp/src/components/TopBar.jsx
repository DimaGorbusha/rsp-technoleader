import React from 'react'
import topBarLogo from '../img/topBarLogo.svg'

export default function TopBar(props) {
  return (
    <div className='flex my-[11px] align-middle'>
        <img src={topBarLogo} alt="" className='ml-[16px]'/>
        <h1 className='ml-[1094px] text-[14px]'>{ props.name }</h1>
    </div>
  )
}
