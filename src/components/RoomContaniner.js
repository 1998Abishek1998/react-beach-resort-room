import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomContainer({context}){
    const {loading, sortedRooms, rooms}= context
    if(loading){
        return <Loading/>
    }
    return (
        <div className='roomContainer'>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
}


export default withRoomConsumer(RoomContainer)

//this situation is solved by react context Consumer . if we use this then this code will not be dynamic.
//this is solved in context with the use of higher order function.

// export default function RoomContaniner() {
//     return (
//         <RoomConsumer>
//             {(value) =>{
//                 const {loading,sortedRooms,rooms} = value
//                 if(loading){
//                     return <Loading/>
//                 }
//                 return (
//                         <div>
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                         </div>
//                 )
            
//             }
//             }
//         </RoomConsumer>
       
//     )
// }
