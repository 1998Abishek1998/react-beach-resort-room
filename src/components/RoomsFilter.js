import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

//get unique values
const getUniqueValues = (items,value)=>{
 return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
   //this is the best way available
   const context = useContext(RoomContext)
   const {
    handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
   } = context
    //get unique types
    let types = getUniqueValues(rooms,'type')
    //add all
    types = ['all',...types]
    //map to jsx
    types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    let people = getUniqueValues(rooms,'capacity')
    people = people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    return (
      <>
      <Title title="search rooms"/>
      <section className="roomContainer">
        <form className='roomContainer__form'>
            {/* select type */}
            <div className='roomContainer__group'>
                <label htmlFor='type'>room type</label>
                <select name='type' id='type' value={type} className='roomContainer__control' onChange={handleChange}>{types}</select>
            </div>
            {/* end of guest */}
            <div className='roomContainer__group'>
                <label htmlFor='capacity'>guest</label>
                <select name='capacity' id='capacity' value={capacity} className='roomContainer__control' onChange={handleChange}>{people}</select>
            </div>
            {/* end of guest */}
            {/* price */}
            <div className='roomContainer__group'>
                <label htmlFor='price'>
                    room price ${price}
                </label>
                <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='roomContainer__control' />
            </div>
            {/* end of price */}
            {/* size */}
            <div className='roomContainer__group'>
                <label htmlFor='size'>size</label>
                    <div className='roomContainer__size'>
                        <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='roomContainer__sizeInput'/>
                        <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='roomContainer__sizeInput'/>
                    </div>
            </div>
            {/* end size */}
            {/* extras */}
            <div className='roomContainer__group'>
                <div className='roomContainer__extra'>
                    <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
                    <label htmlFor='breakfast'>breakfast</label>
                </div>
                <div className='roomContainer__extra'>
                    <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange} />
                    <label htmlFor='pets'>pets</label>
                </div>
            </div>
            {/* end oroomContainer__ras */}
        </form>
      </section>
      </>
    )
}
