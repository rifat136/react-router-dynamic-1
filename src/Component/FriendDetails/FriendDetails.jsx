import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const detail=useLoaderData();
    return (
        <div>
            <h3>Hi Firend</h3>
            <h2>Name: {detail.name}</h2>
            <h3>Phone: {detail.phone}</h3>
        </div>
    );
};

export default FriendDetails;