import React, { useState, useEffect } from 'react'
import './Content.scss'
import Bio from '../Bio/Bio'
import Resume from '../Resume/Resume'
import Hobbies from '../Hobbies/Hobbies'
import { HashRouter, Route, Routes } from 'react-router-dom'

const Content = (props) => {
    return (
        <div className="content">
            <HashRouter>
                <Routes>
                    <Route exact path="/mackie-portfolio/" element={<Bio />} />
                    <Route path="/mackie-portfolio/resume" element={<Resume />} />
                    <Route path="/mackie-portfolio/hobbies" element={<Hobbies />} />
                </Routes>
            </HashRouter>
        </div>
    )
}

export default Content
