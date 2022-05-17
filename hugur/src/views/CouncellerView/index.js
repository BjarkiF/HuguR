import { Button } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './councellerStyle.css'

const CouncellerView = () => {

    const karaRedirect = () => {
        window.open("https://app.karaconnect.com/company-profile/329", '_blank')
    }

    const infoRedirect = () => {
        window.open("https://en.ru.is/services/support/", '_blank')
    }

    return (
        <div className='CouncelorView'>
            <img className='ImgCouncelor' src='https://ouch-cdn2.icons8.com/ul71bOTjiN4-nhUmZB4tEK4wVJiMBguTm572bQD8KVw/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODk1/L2JmOWFmODZhLWU0/N2MtNDc4ZS1hMzZj/LTlmMDc1YzVmMTQy/NS5wbmc.png' alt='Check internet please' />
            <h3 id="wip">Student support!</h3>
            <div className='LinksToSupport'>
                <p>You can book an appointment via the software <Button onClick={karaRedirect} variant="text">Karaconnect</Button></p>
                <p>For more information, <Button onClick={infoRedirect} variant="text">press here!</Button></p>
            </div>
        </div>
    )
};

export default CouncellerView;