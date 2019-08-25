import React from 'react'


const Header = (props) => (
    <div className='bg-black flex flex-col text-center text-white h-24'>
        <div className='text-2xl pl-3 pr-2 mt-3'><i className='fas fa-mortar-pestle App-logo'></i></div>
        <div className='text-2xl pl-3' >{props.title}</div>
    </div>
)

export default Header