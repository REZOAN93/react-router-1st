import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './FriendDetails.css'

const FriendDetails = () => {
    const {friendId}=useParams();
    const [friend,setfriend]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then (res=>res.json())
        .then (data=>setfriend(data))
    },[])
    
    let navigate = useNavigate();
    const handlebackfriend= ()=>{
        navigate("/friends");
    }
    return (
        <div className='Detailsinfo'>
            <h3>Details coming soon {friendId}</h3>
            <h1> this is {friend.name}</h1>
            <h3>Phone: {friend.phone}</h3>
            <h3>Website: {friend.website}</h3>
            <h4>Company: {friend.company?.name}</h4>
            <button onClick={handlebackfriend}>See all Friends</button>
        </div>
    );
};

export default FriendDetails;