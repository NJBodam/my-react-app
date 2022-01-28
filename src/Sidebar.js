import React from 'react'
import './Sidebar.css'
import Menu from './Menu'

function Sidebar() {
    return (
        <div className='sidebar-comp'>
            <Menu text="Home" icon="fa fa-home"/>
            <Menu text="About" icon="fa fa-user"/>
            <Menu text="Services" icon="fa fa-suitcase"/>
            <Menu text="Contact" icon="fa fa-phone"/>
            <Menu text="Subscrition" icon="fa fa-user"/>
            <Menu text="Blog" icon="fa fa-user"/>
           {/* <div className="menu"><i className='fa fa-home'></i><a href="#">Home</a> </div>
           <div className="menu"><i className='fa fa-user'></i><a href="#">About</a></div>
           <div className="menu"><i className='fa fa-suitcase'></i><a href="#">Services</a></div>
           <div className="menu"><i className='fa fa-phone'></i><a href="#">Contact</a></div>
           <div className="menu"><i className='fa fa-user'></i><a href="#">Subscription</a></div>
           <div className="menu"><i className='fa fa-user'></i><a href="#">Blog</a></div> */}
        </div>
    )
}

export default Sidebar
