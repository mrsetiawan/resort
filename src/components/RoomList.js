import React from 'react'
import Room from './Room'

export default function RoomList(props) {

  const { rooms } = props

  if (rooms.length === 0) {
    return (
      <>
        <div className='empty-search'>
          <h4>room not found</h4>
        </div>
      </>
    )
  }

  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map((item,idx) => 
          <Room key={idx} room={item} />
        )}        
      </div>
    </section>
  )
}
