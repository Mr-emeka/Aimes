import React from 'react'
import Card from './card.styled'


export default ({ projectName, description, liveURL, technologyUsed }) => {
    return <Card>
        <h4 className="mb-5">{projectName}</h4>
        <span>{technologyUsed}</span>
        <p className="my-4">{description.substring(0,100)}</p>
        <a href={liveURL}  rel="noopener noreferrer" target="_blank">  <button>Live URL</button></a>
        <button className="ml-2">View More</button>
    </Card>
}