// here is the photo of the day page
import React from 'react'

const Photo = props => {
    const { photo } = props
    return (
       <div className = "photo wrapper">
           <img
           alt="astronomy of the day"
           className='image-of-the-day'
           src={photo}
           />
       </div> 
    )



}
export default Photo;