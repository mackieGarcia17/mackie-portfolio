import React, { useState, useEffect } from 'react'
import './Footer.scss'
import { IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import CoPresentIcon from '@mui/icons-material/CoPresent'
import CalculateIcon from '@mui/icons-material/Calculate'
import PetsIcon from '@mui/icons-material/Pets'

const Footer = (props) => {
    const [page, setPage] = useState('')

    useEffect(() => {
        const url = window.location.href.split('/')
        const p = url[url.length - 1]
        if (p.length === 0) {
            setPage('home')
        } else {
            setPage(p)
        }
    }, [])

    const onMenuItemClick = (p) => {
        setPage(p)
        if (p === 'home') {
            window.location.replace('/')
        } else {
            console.log('mk wiwi:', window.location)
            // window.location.replace(`/mackie-portfolio/${p}`)
        }
    }
    console.log('mk pages:', page)
    return (
        <div className="footer">
            <div className="footer__content">
                <div className={`footer__content__btn separator ${page === 'home' ? 'selected' : ''}`}>
                    <IconButton onClick={() => onMenuItemClick('home')}>
                        <HomeIcon />
                    </IconButton>
                    <p>Home</p>
                </div>
                <div className={`footer__content__btn separator ${page === 'resume' ? 'selected' : ''}`}>
                    <IconButton onClick={() => onMenuItemClick('resume')}>
                        <CoPresentIcon />
                    </IconButton>
                    <p>Resume</p>
                </div>
                {/* <div className={`footer__content__btn separator ${page === 'bmi' ? 'selected' : ''}`}>
                    <IconButton onClick={() => onMenuItemClick('bmi')}>
                        <CalculateIcon />
                    </IconButton>
                    <p>BMI Calculator</p>
                </div> */}
                <div className={`footer__content__btn ${page === 'hobbies' ? 'selected' : ''}`}>
                    <IconButton onClick={() => onMenuItemClick('hobbies')}>
                        <PetsIcon />
                    </IconButton>
                    <p>Hobbies</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
