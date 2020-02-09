import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

const getUnique = (item,value) => {
  return [...new Set(item.map(item => item[value]))]
}

export default function RoomFilter(props) {

  const context = useContext(RoomContext)
  const {
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    breakfast,
    pets,
    handleChange

  } = context

  let types = getUnique(props.rooms,'type')
  // console.log(types)
  return (
    <section className='filter-container'>
      <Title title='Search Room' />
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor="type">room Type</label>
          <select name="type" id="type" value={type} className='form-control' onChange={handleChange}>
            {/* {props.rooms.map((item,idx) => {
              <option key={idx} value={item.name}>{item.name}</option>
            })} */}
          </select>
        </div>
      </form>
    </section>
  )
}
