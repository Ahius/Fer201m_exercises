import React from 'react'
import { PlayerList } from '../shared/ListOfPlayers'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Players() {

    return (
        <div className='container'>
            <div className='row'>
                {PlayerList.map((player) => (
                    <div className='col-lg-4 col-md-6' key={player.id}>
                        <div className='card'>
                            <img src={player.img} className='image' />
                            <h3>{player.name}</h3>
                            <p className='club'>{player.club}</p>
                            <p><button className='btn btn-primary'>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )

}