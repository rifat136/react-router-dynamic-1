import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';


const Friend = ({friend}) => {
    console.log(friend);

    const {name,email,id,phone}=friend;

    return (
        <div className='friend-div'>
            <h2>Name:{name}</h2>
            <h4>Id: {id}</h4>
            <h3>Phone: {phone}</h3>
            <h4>email: {email}</h4>
            <h2>
             <Link to={`/friend/${id}`}>Show Details</Link>
            </h2>

            

        </div>
    );
};

export default Friend;