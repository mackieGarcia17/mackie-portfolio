import React, { useState, useEffect } from 'react'
import './Main.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'

const Main = (props) => {
    return (
        <div className="main">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Main
