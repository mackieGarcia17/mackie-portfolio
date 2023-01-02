import React, { useState, useEffect } from 'react'
import './Bio.scss'
import biodata from '../../Data/biodata.json'
import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Bio = (props) => {
    const mackieImgUrl = 'images/mackie.png'
    const citImgUrl = 'images/cit.png'
    const wesImgUrl = 'images/wes.png'
    const wesCertUrl = 'certificates/wes_cert.pdf'
    console.log('mk oie:', biodata)
    return (
        <div className="bio">
            <div className="bio__about-me">
                <img src={mackieImgUrl} alt="Epimaco Daniel H Garcia" />
                <div className="bio__about-me__text">
                    <p>
                        Hi, My name is <b>{biodata.fullname}</b>.
                    </p>
                    <p>
                        I am currently residening in <b>{biodata.address}</b>.
                    </p>
                    <p>This site will serve as my simple portfolio.</p>
                    <br />
                    <p>Below are my contact details:</p>
                    <ul>
                        <li>
                            <EmailIcon />
                            <p>
                                <b>Email:</b> {biodata.email}
                            </p>
                        </li>
                        <li>
                            <CallIcon />
                            <p>
                                <b>Mobile No.:</b> {biodata.mobile}
                            </p>
                        </li>
                        <li>
                            <LinkedInIcon />
                            <p>
                                <b>Linkedin:</b>{' '}
                                <a href={biodata.linkin} target="_blank" rel="noopener noreferrer">
                                    {biodata.linkin}
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bio__education">
                <h2>Education:</h2>
                <div className="bio__education__school">
                    <a href="https://cit.edu/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="bio__education__school__school-img"
                            src={citImgUrl}
                            alt="Cebu Institute of Technology University"
                        />
                    </a>

                    <div className="bio__education__school__info">
                        <h3>Cebu Institute of Technology University</h3>
                        <p>Bachelor of Science in Information Technology</p>
                        <p>2007 – 2009</p>
                        <p>
                            <b>Verified by:</b>
                            <a href="https://www.wes.org/" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="bio__education__school__info__verifier"
                                    src={wesImgUrl}
                                    alt="World Education Services"
                                />
                            </a>
                        </p>
                        <br />
                        <p>
                            <a href={wesCertUrl} target="_blank" rel="noopener noreferrer">
                                Click here to view WES Certificate...
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio
