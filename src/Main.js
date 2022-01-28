import React from 'react'
import Mainbody from './Mainbody'
import Sidebar from './Sidebar'
import './Main.css'

function Main() {
    return (
        <div className="main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="mainbody">
                <Mainbody/>
            </div>
            
        </div>
    )
}

export default Main
