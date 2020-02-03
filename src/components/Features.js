import React, { Component } from 'react'
import Title from './Title'
import { RoomContext } from '../context'


export default class Features extends Component {
  static contextType = RoomContext;

  render() {
    // const value = this.context
    // console.log(value.name)
    const { featuredRooms: rooms } = this.context

    return (
      <section className='features'>
        <Title title='Features' />
        <p> my name is </p>p>
      </section>
    )
  }
}
