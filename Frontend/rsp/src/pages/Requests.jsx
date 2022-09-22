import React from 'react'
import TopBar from '../components/TopBar'
import SideMenu from '../components/SideMenu'
import Header from '../components/requestComponents/Header'

export default function Requests() {
  return (
    <div>
        <TopBar name={"Поскакалов Артур Эдуардович"}/>
        <div className='flex'>
            <SideMenu selectedKey={"requests"}/>
            <Header requestCounts={"4"}/>
        </div>

    </div>
  )
}
