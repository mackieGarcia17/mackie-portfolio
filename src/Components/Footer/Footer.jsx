import React from 'react'
import './Footer.scss'
import { IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import CoPresentIcon from '@mui/icons-material/CoPresent'
import CalculateIcon from '@mui/icons-material/Calculate'
import PetsIcon from '@mui/icons-material/Pets'

const Footer = (props) => {
    const { page, setPage } = props

    const onMenuItemClick = (p) => {
        setPage(p)
    }

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
