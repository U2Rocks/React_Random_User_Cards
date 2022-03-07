import React from 'react'
import { Card } from './Card'

export const Cardarea = ( { cardList} ) => {
  return (
    <div>
        <div className="flex justify-start flex-wrap overflow-scroll max-h-[37rem]">
            { cardList.map((card) => {
                return(<Card key={card.IdNum} picture={card.Picture} name={card.Name} email={card.Email} address={card.Location} phonenumber={card.Phone} age={card.Age}/>)
            })}
        </div>
    </div>
  )
}
