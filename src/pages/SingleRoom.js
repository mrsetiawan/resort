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
      extract, 
      breakfast, 
      pets, 
      image} = room
      
    const [mainImg, ...defaultBcg] = image
    // console.log(mainImg)

    return(
      <>
        <StyledHero img={image[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>

        <section className='single-room'> 
          <div className='single-room-images'>
            {image.map((img, idx) => 
              <div key={idx}>
                <img src ={img} alt='single room' />
              </div>
            )}
          </div>
        </section>
      </>
    )
  }
}

export default SingleRoom
