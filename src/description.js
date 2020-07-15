// here is the file for the description for the photo of the day
import React from 'react'

const Description = props =>{
    const { description } = props
    return (
        <div>
            <h2>{description.title}</h2>
            <h3>{description.date}</h3>
            <p>{description.explanation}</p>
        </div>
    )
}

export default Description