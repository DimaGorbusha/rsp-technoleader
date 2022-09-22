import React from 'react'
import { Button } from 'antd';

export default function Header(props) {

    function handleClick(e){
        e.preventDefault();
    };

    return (
        <div className='flex ml-[23px]'>
            <h1 className='mr-[970px] text-[24px]'>Заявки  <span className='text-[#BFBFBF]'>{props.requestCount}</span></h1>
            <Button type="primary" onClick={handleClick}>Создать заявку</Button>
        </div>
    )
}
