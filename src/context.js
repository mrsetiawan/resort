import React, { Component } from 'react'

const RoomContext = React.createContext();

class RoomProvider extends Component {

  state = {
    name: 'muhamad rahmat setiawan',
    greeting :'hi good morning'
  }

  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer }
