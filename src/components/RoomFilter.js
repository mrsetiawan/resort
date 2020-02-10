import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
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

  //get unique types
  let types = getUnique(props.rooms, 'type')
  // console.log(types)
  //get all to types
  types = ['all', ...types]
  // console.log(types)
  //map types to jsx
  types = types.map((item, idx) => <option value={item} key={idx}>{item}</option>)

  return (
    <section className='filter-container'>
      <Title title='Search Room' />
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor="type">room Type</label>
          <select name="type" id="type" value={type} className='form-control' onChange={handleChange}>
            {types}
          </select>
        </div>
      </form>
    </section>
  )
}
