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

  // console.log(props.rooms)

  //get unique types
  let types = getUnique(props.rooms, 'type')
  // console.log(types)
  //get all to types
  types = ['all', ...types]
  // console.log(types)
  //map types to jsx
  types = types.map((item, idx) => <option value={item} key={idx}>{item}</option>)

  let guest = getUnique(props.rooms, 'capacity')

  guest = guest.map((item, idx) => <option value={item} key={idx}>{item}</option>)

  return (
    <section className='filter-container'>
      <Title title='Search Room' />
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor="type">room Type</label>
          <select 
            name="type" 
            id="type" 
            value={type} 
            className='form-control' 
            onChange={handleChange}
          >
            {types}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor="capacity">Capacity</label>
          <select name="capacity" id="capacity" value={capacity} onChange={handleChange}>
            {guest}
          </select>
        </div>
        
        <div className='form-group'>
          <label htmlFor="price">room price $ {price}</label>
          <input 
            type="range" 
            name='price' 
            className='form-control'
            id='price' 
            value={price} 
            min={minPrice} 
            max={maxPrice} 
            onChange={handleChange} 
          />
        </div>

        <div className='form-group'>
          <label>room size</label>
          <div className='size-inputs'>
            <input type="number" value={minSize} name='minSize' id='minSize' onChange={handleChange} className='size-input'/>
            <input type="number" value={maxSize} name="maxSize" id="maxSize" onChange={handleChange} className='size-input' />
          </div>
        </div>

        <div className='form-group'>
          <div className='single-extra'>
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}  />
            <label htmlFor="breakfast">
              breakfast
            </label>
          </div>

          <div className='single-extra'>
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}  />
            <label htmlFor="pets">
              pets
            </label>
          </div>
        </div>
      </form>
    </section>
  )
}
