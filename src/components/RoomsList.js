import React from 'react'
import Room from './Room'
export default function RoomsList({rooms}) {
    if(rooms.length === 0){
        return (
            <div className="empty-search">
                <h3>search parameter not matched</h3>
            </div>
        )
    }
    return (
        <section className="roomContainer__list">
            <div className="roomContainer__listCenter">
            {
                rooms.map(item => {
                    return <Room key={item.id} room={item}/>
                })
            }
            </div> 
        </section>
    )
}
