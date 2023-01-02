import React, { useState, useEffect } from 'react'
import './Main.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'

const Main = (props) => {
    const [page, setPage] = useState('home')

    return (
        <div className="main">
            <Header />
            <Content page={page} />
            <Footer page={page} setPage={setPage} />
        </div>
    )
}

export default Main
