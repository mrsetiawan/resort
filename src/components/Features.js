import React, { Component } from 'react'
import Title from './Title'
import { RoomContext } from '../context'
import Room from './Room'
import Loading from './Loading'

export default class Features extends Component {
  static contextType = RoomContext;

  render() {
    let { featuredRooms : rooms,loading, getDataRoom} = this.context
    // console.log(getDataRoom)
    rooms = rooms.map(room => <Room key={room.id} room={room} />)
    return (
      <section className='featured-rooms'>
        <Title title='Features' />
        <div className='featured-rooms-center'>
          { loading ? <Loading /> : rooms }
        </div>
      </section>
    )
  }
}
