import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomConsumer,withRoomConsumer } from './../context'
import Loading from '../components/Loading'

function RoomContainer(props) {

  const context = props.context
  const { rooms, sortedRooms, loading } = context
  
  if (loading) {
    return <Loading />
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  )
}

export default withRoomConsumer(RoomContainer)

// export default function RoomContainer() {

//   return (
//     <RoomConsumer>
//       {(value) => {

//         const { rooms, sortedRooms, loading } = value

//         if (loading) {
//           return <Loading />
//         }

//         return (
//           <>
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </>
//         )
//       }}

//     </RoomConsumer>
//   )
// }
