import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const {id, name, phone, website, address } = props.friend;
    const url=`/about/${id}`;
    
    let navigate=useNavigate();
    const handleFriendClick=()=>{
        navigate(`/friend/${id}`);
    }
    return (
        <>
            <div className='friendstyle'>
                <main >
                    <h1>I am {name} {id}</h1>
                    <h5>Call me:{phone}</h5>
                    <p>Visit me:{website}</p>
                    <p><small>I live in {address.city}</small></p>
                </main>
                <nav>
                    <Link to={`/friend/${id}`}>Friend</Link>
                    <br />
                    {/* process one */}
                    <Link to={url}>About</Link>
                    <br />
                    {/* process two*/}
                    <Link to={`/friend/${id}`}><button>Click Me</button></Link>
                    <br />
                     {/* process three*/}
                    <button onClick={handleFriendClick}> Visit me 2</button>
                </nav>
            </div>
        </>

    );
};

export default Friend;