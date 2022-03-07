import React, { useState, useEffect } from 'react'
import { Cardarea } from './Cardarea'
import { Cardform } from './Cardform'

export const Cardbox = () => {

    const [cardList, setCardList] = useState([])
    // const [listActivated, setListActivated] = useState(true) // this is permanetly true(cardform no longer changes it)

    useEffect(() => {
        console.log("cardbox loaded") // used for testing for rerenderss
        // console.log(cardList)
    }, [])


    // this function takes new formed object and adds it to cardList
    const iterateList = ( newCard ) => {
        // console.log("iterateList(cardbox) started...")
        if (newCard == {}) return
        setCardList([...cardList, newCard])
        // console.log("iterateList ended...")
        // console.log(cardList)
    }


  return (
    <div className="bg-blue-600">
       <Cardarea cardList={cardList}/>
       <Cardform addlistFunction={iterateList}/>
    </div>
  )
}
