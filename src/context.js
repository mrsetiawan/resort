import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

class RoomProvider extends Component {

  state = {
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading:true,
    type:'all',
    capacity:1,
    price:0,
    maxPrice:0,
    minPrice:0,
    minSize:0,
    maxSize:0,
    breakfast:false,
    pets:false
  }

  componentDidMount(){
    let rooms = this.handleData(items)
    let featuredRooms = rooms.filter(room => room.featured === true)
    let maxPrice = Math.max(...rooms.map((item,idx) => item.price))
    let maxSize  = Math.max(...rooms.map((item,idx) => item.size))

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms:rooms,
      loading:false,
      price:maxPrice,
      maxPrice,
      maxSize,
    })
  }

  handleData = items => {
    let allData = items.map(item => {
      let id = item.sys.id
      let image = item.fields.images.map(image => image.fields.file.url)
      let room = {...item.fields, image, id}
      return room
    });
    return allData
  }

  getDataRoom = slug => {
    let tempRoom = [...this.state.rooms]
    const room = tempRoom.find(room => room.slug === slug)
    return room
  }

  handleChange = event => {
    const target = event.target
    const value  = event.type === 'checkbox' ? target.checked : target.value 
    const name   = event.target.name

    // console.log(`dalam handle change ${value}`)

    this.setState({
      [name] : value
    },this.roomsFilter)
  }

  roomsFilter = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      maxPrice,
      minPrice,
      maxSize,
      minSize,
      breakfast,
      pets
    } = this.state

    let tempRoom = [...rooms]

    capacity = parseInt(capacity)
    price = parseInt(price)

    //filter type
    if(type !== 'all'){
      tempRoom = tempRoom.filter((room) => room.type === type)
    }

    //filter capacity
    if(capacity !== 1){
      tempRoom = tempRoom.filter((room) => room.capacity >= capacity)
    }

    //filter price
    tempRoom = tempRoom.filter((room) => room.price === price)

    //filter size
    tempRoom = tempRoom.filter((room) => room.size >= minSize && room.size <= maxSize )

    //filter breakfast dan  pets
    if(breakfast){
      tempRoom = tempRoom.filter((room) => room.breakfast === true)
    }

    if(pets){
      tempRoom = tempRoom.filter((room) => room.pets === true)
    }

    this.setState({
      sortedRooms: tempRoom
    })

  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getDataRoom: this.getDataRoom, handleChange: this.handleChange }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

//HOC
export function withRoomConsumer(Component){
  return function ConsumerWrapper(){
    return (
      <RoomConsumer>
        {value => <Component context={value} />}
      </RoomConsumer>
    )
  }
}

export { RoomContext, RoomProvider, RoomConsumer }
