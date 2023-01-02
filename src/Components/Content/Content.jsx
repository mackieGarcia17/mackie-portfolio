import React, { useState, useEffect } from 'react'
import './Content.scss'
import Bio from '../Bio/Bio'
import Resume from '../Resume/Resume'
import Hobbies from '../Hobbies/Hobbies'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Content = (props) => {
    return (
        <div className="content">
            {/* <Router>
                <Routes>
                    <Route exact path="/" element={<Bio />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                </Routes>
            </Router> */}
            <Bio />
        </div>
    )
}

export default Content
