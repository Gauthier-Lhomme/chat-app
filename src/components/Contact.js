import React from 'react';
import './style.css';

const isOnline = true;

function Contact(){
    return(
    <div className="Contact" >
        <div  >
            <img className="avatar" src="https://randomuser.me/api/portraits/men/79.jpg"/>
        </div>

        <div className="status">
            <p className="name">Randall Harris</p>
            <p className="status-text">{isOnline ? <p className="status-online">Online</p> : <p className="status-offline">Disconnected</p>}</p>
        </div>
    
    </div>

    )
}

export default Contact;