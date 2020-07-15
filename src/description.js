// here is the file for the description for the photo of the day
import React from 'react'

const Description = props =>{
    const { description } = props
    return (
        <div>
            <p>{description}</p>
        </div>
    )
}

export default Description