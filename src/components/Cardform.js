import axios from 'axios'
import React, { useState} from 'react'

export const Cardform = ({ addlistFunction}) => {

    const [newCardSlot, setNewCardSlot] = useState({ Name: "empty"})
    // base newCardSlot is used for first render and causes bad behaviors and key prop error warning...


    // this function turns object created in getUserData into state data
    const makeNewCard = (object) => {
        // console.log("new card factory(cardform) started...")
        // console.log(object)
        setNewCardSlot(object)
        // console.log("new card factory(cardform) ended...")
    }

    // axios function to get data and package object to be turned into state
    async function getUserData() {
        try {
            const response = await axios.get('https://randomuser.me/api/')
            // console.log(response)
            const responseObj = response['data']['results'][0]
            let newEmail = responseObj['email']
            let newName = responseObj['name']['first'] + ' ' + responseObj['name']['last']
            let newAge = responseObj['dob']['age']
            let newLocation = responseObj['location']['city'] + ', ' + responseObj['location']['state']
            let newPhone = responseObj['phone']
            let newPic = responseObj['picture']['large']
            let newID = response['data']['info']['seed'] // value for key prop
            let newObject = { Name: newName, Age: newAge, Email: newEmail, Location: newLocation, Phone: newPhone, Picture: newPic, IdNum: newID }
            makeNewCard(newObject)
            // console.log("getUserData ended...(cardform)")
        } catch(error){
            console.error(error)
            return
        }
    }


    // this function takes the newly packaged object and adds it to the list
    const addCard = () => {
        // console.log("addCard(cardform) fired...")
        makeNewCard(getUserData())
        // console.log("makeNewCard(cardform) Finished...")
        if (newCardSlot.Name !== "empty") {addlistFunction(newCardSlot)} // this prevents empty first object from rendering a card
    }

  return (
    <>
        <div className="flex justify-center border-t-2 border-t-black bg-blue-800">
            <button onClick={addCard} className="drop-shadow-lg bg-green-500 hover:bg-green-300 p-2 m-2 border-black border-2 hover:rounded-lg">Generate a Card</button>
        </div>
    </>
  )
}
