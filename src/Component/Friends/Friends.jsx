import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {

    const  friends= useLoaderData();
    // console.log(data);
    return (
        <div >
           <h1>Friends</h1> 
           <div className='container'>
            {
                friends.map(friend => <Friend key={friend.id}
                friend={friend}
                ></Friend> )
            }
           </div>
        </div>
    );
};

export default Friends;