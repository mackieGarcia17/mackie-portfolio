import React from 'react'
import './Content.scss'
import Bio from '../Bio/Bio'
import Resume from '../Resume/Resume'
import Hobbies from '../Hobbies/Hobbies'

const Content = (props) => {
    const { page } = props

    return (
        <div className="content">
            {page === 'home' && <Bio />}
            {page === 'resume' && <Resume />}
            {page === 'hobbies' && <Hobbies />}
        </div>
    )
}

export default Content
