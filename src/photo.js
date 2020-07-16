// here is the photo of the day page
import React from 'react'

import styled, { keyframes } from 'styled-components'

const keyframe = keyframes`
0%{
    transform: scale(0) 

}
100%{
    transform: scale(1) 
}

`



const PhotoContainerStyling = styled.div`
    display: flex;
    justify-content: center;


    img{
        animation: ${keyframe} 2s ease-in-out forwards;
        border-radius: 10px;
    }
`



const Photo = props => {
    const { photo } = props
    return (
       <PhotoContainerStyling className = "photo wrapper">
           <img
           alt="astronomy of the day"
           className='image-of-the-day'
           src={photo}
           />
       </PhotoContainerStyling> 
    )



}
export default Photo;