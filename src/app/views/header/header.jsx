import React, { Component } from 'react'
import Logo from './logo'
import Theme from './theme'
import './style.module.less'
const header = ()=>{
    return (
        <header>
            <Logo />
            <Theme />
        </header>
    )
}

export default header