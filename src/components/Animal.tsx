import React, { FC } from 'react'

interface AnimalCardProps {
    name:string,
    race:string,
    city:string,
    image:string,
    onDelete:() => void
  
}

const Animal:React.FC<AnimalCardProps> = ({name,race,city,image,onDelete}) => {
  return (
    <div><h2>{name}</h2>
    <h3>{city}</h3>
    <h4>{race}</h4>
    <img src={image} alt="" />
    <button onClick={onDelete}>delete</button>
    </div>
  )
}

export default Animal