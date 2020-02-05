import React, { Component } from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import defaultBcg from './../images/room-1.jpeg'
import StyledHero from '../components/StyledHero'

class SingleRoom extends Component {

  static contextType = RoomContext;

  state = {
    slug:this.props.match.params.slug,
    defaultBcg
  }

  render() {
    
    const { getDataRoom } = this.context;
    const room = getDataRoom(this.state.slug)

    if(!room){
      return (
        <div className='error'>
          <h3>Room not found</h3>
          <Link to ="/rooms" className='btn-primary'>
            Back to rooms
          </Link>
        </div>
      )
    }

    const {
      name, 
      description, 
      capacity, 
      size,
      price, 
      extras, 
      breakfast, 
      pets, 
      image} = room

      console.log(room)
      
    const [mainImg, ...defaultBcg] = image
    // console.log(image)
    // console.log(this.state.defaultBcg)

    return(
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>

        <section className='single-room'> 
          <div className='single-room-images'>
            {defaultBcg.map((img, idx) => 
              <div key={idx}>
                <img src ={img} alt='single room' />
              </div>
            )}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>Info</h3>
              <h6>Price : ${price}</h6>
              <h6>Size : {size} SQFT</h6>
              <h6>Max Capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
              <h6>{pets ? "pets allowed" : "pets not allowed"}</h6>
              <h6>{breakfast && "free breakfast"}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>Extras</h6>
          <ul className='extras'>
            {extras.map((item,idx) => 
              <li key={idx}>- {item}</li>
            )}
          </ul>
        </section>
      </>
    )
  }
}

export default SingleRoom
