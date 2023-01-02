import React from 'react'
import './Header.scss'

const Header = (props) => {
    return (
        <div className="header">
            <h1> &#60; M &#62;</h1>
            <span>
                <p>
                    <b>Powered by:</b> React
                </p>
                <p>Site is Responsive</p>
            </span>
        </div>
    )
}

export default Header
