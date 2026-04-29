import '../styles/ContactPicture.css'

import { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactPicture({defaultSrc, hoverSrc}) {
    const [src, setSrc] = useState(defaultSrc)

    return(
        <Link className="contact-picture-wrapper"
        to="/contact" >
            <img 
            src={src} 
            className='contact-picture'
            onMouseEnter={() => setSrc(hoverSrc)}
            onMouseLeave={() => setSrc(defaultSrc)}
            />

            {src === hoverSrc && (
                <div 
                className = "hover-contact-text"> 
                    contact me
                </div>
            )}
        </Link>

        
    )
}

export default ContactPicture;