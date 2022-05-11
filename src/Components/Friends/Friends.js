import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const [friends, setfriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setfriends(json))
    }, [])
    return (
        <>
            <main>
                <h1>Hi I have {friends.length} Friends</h1>
                <div className='friend-container'>
                    {
                        friends.map(friend => <Friend
                            friend={friend}
                            key={friend.id}></Friend>)
                    }
                </div>
            </main>
           
            
        </>
    );
};

export default Friends;