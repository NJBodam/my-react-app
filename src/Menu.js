import React from 'react'

function Menu(props) {
    return (
        <div>
            <div className="menu"><i className={props.icon}></i><a href="#">{props.text}</a> </div>
        </div>
    )
}

export default Menu
