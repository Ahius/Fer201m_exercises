import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function PlayersPresentation({ players }) {
    //console.log(players);
    const [player, setPlayer] = useState([]);
    return (
        <div className='container'>
            <div className='row'>
                {players.map((player) => (
                    <div className='col-lg-4 col-md-6' key={player.id}>
                        <div className='card'>
                            <img src={player.img} alt='' className='image' />
                            <h3>{player.name}</h3>
                            <p className='club'>{player.club}</p>
                            <button onClick={() => { setPlayer(player) }}>
                                <a href='#popup1' id='openPopUp'>Detail</a>
                            </button>
                        </div>
                    </div>
                ))}
                <div id='popup1' className='overlay'>
                    <div className='popup'>
                        <img src={player.img}  alt=''  />
                        <h2>{player.name}</h2>
                        <a className='close' href='#'>&times;</a>
                        <div className='content'>
                            {player.info}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}