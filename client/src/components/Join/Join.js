import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('1');  //set 1 for default value in select

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join Chat</h1>
                <div> 
                <label for="joinInput">Choose name:</label>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(e) => setName(e.target.value)} /> </div>
                <div>
                    
                    <label for="joinInput">Choose room:</label>
                    <select className="joinInput" onChange={(e) => setRoom(e.target.value)} >
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                    </select>
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit"> sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;