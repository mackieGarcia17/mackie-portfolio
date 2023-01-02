import React, { useState } from 'react'
import './Resume.scss'
import Backdrop from '@mui/material/Backdrop'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import TerminalIcon from '@mui/icons-material/Terminal'
import EngineeringIcon from '@mui/icons-material/Engineering'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import workExperience from '../../Data/experience.json'
import reference from '../../Data/reference.json'

const Resume = (props) => {
    const [open, setOpen] = useState(false)
    const [resumeSection, setResumeSection] = useState('experience')
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const onSelectSection = (section) => {
        setResumeSection(section.toLowerCase())
        setOpen(false)
    }
    const actions = [
        { icon: <TerminalIcon />, name: 'Experience' },
        { icon: <EngineeringIcon />, name: 'Reference' },
    ]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <div className="resume">
            <div className="resume__speed-dial">
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    direction="down"
                    open={open}>
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={() => onSelectSection(action.name)}
                        />
                    ))}
                </SpeedDial>
            </div>
            {resumeSection === 'experience' && (
                <div className="resume__work-experience">
                    <h2>Experience:</h2>
                    <Carousel responsive={responsive}>
                        {workExperience.map((w) => {
                            return (
                                <div key={w.companyName} className="company">
                                    <div className="company__info">
                                        <div className="company__info__left">
                                            <a href={w.companySite} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    className="bio__education__school__school-img"
                                                    src={w.companyImgUrl}
                                                    alt={w.companyName}
                                                />
                                            </a>
                                            <p className="name">{w.companyName}</p>
                                            <p>{w.tenure}</p>
                                        </div>
                                        <div className="company__info__right">
                                            <p>
                                                <b>Position: </b>
                                                {w.position}
                                            </p>
                                            <p>
                                                <b>Technology: </b>
                                                {w.technology}
                                            </p>
                                            <ul>
                                                {w.tasks.map((t, i) => {
                                                    return <li key={`${w.companyName}_${i}`}>{t}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            )}

            {resumeSection === 'reference' && (
                <div className="resume__reference">
                    <h2>Reference:</h2>

                    {reference.map((r) => {
                        return (
                            <div key={r.name} className="resume__reference__person">
                                <p>
                                    <b>Name:</b> {r.name}
                                </p>
                                <p>
                                    <b>Company:</b> {r.company}
                                </p>
                                <p>
                                    <b>Position:</b> {r.position}
                                </p>
                                <p>
                                    <b>Email:</b> {r.email}
                                </p>
                            </div>
                        )
                    })}
                </div>
            )}

            <Backdrop open={open} />
        </div>
    )
}

export default Resume
