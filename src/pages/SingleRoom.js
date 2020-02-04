import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import defaultBcg from './../images/room-1.jpeg'

class SingleRoom extends Component {

  static contextType = RoomContext;

  state = {
    slug:this.props.match.params.slug
  }

  render() {
    
    const { getDataRoom } = this.context;
    const room = getDataRoom(this.state.slug)
    return (
      <Hero>
        <Banner title='banner title'>
          tes
        </Banner>
      </Hero>
    )
  }
}

export default SingleRoom
