import React, { Component } from 'react'
import Title from './Title'
import { RoomContext } from '../context'


export default class Features extends Component {
  static contextType = RoomContext;

  render() {
    // const value = this.context
    // console.log(value.name)
    const {name,greeting} = this.context
    return (
      <section className='features'>
        <Title title='Features' />
        <p>{greeting} my name is {name}</p>
      </section>
    )
  }
}
