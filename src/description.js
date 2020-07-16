// here is the file for the description for the photo of the day
import React from 'react'
import styled from 'styled-components'


const DescriptionStyle = styled.div`
text-align: center;



`




const Description = props =>{
    const { description } = props
    return (
        <DescriptionStyle>
            <h2>{description.title}</h2>
            <h3>{description.date}</h3>
            <p>{description.explanation}</p>
        </DescriptionStyle>
    )
}

export default Description