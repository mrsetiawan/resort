import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

class RoomProvider extends Component {

  state = {
    rooms:[],
    sortedRooms:[],
    featuredRooms:{},
    loading:true
  }

  componentDidMount(){
    let rooms = this.handleData(items)
    let featuredRooms = rooms.filter(room => room.fields == true)
    console.log(featuredRooms)
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms:rooms,
      loading:false
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

  render() {
    console.log(this.state.sortedRooms)
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer }
