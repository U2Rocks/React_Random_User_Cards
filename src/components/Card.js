import React from 'react'

export const Card = ({ picture, name, email, address, phonenumber, age}) => {
  return (
    <>
        <div className="grid grid-cols-1 place-items-center break-words bg-green-400 m-3 p-1 border-black border-2 rounded-md max-w-[14rem] min-w-[14rem] hover:scale-105 transition-all">
            <div className="border-2 border-black rounded-full mt-2 overflow-hidden p-1 bg-white"><img className="scale-110" src={picture} alt="emoji-face" /></div>
            <div className="text-left bg-green-200 mt-2 rounded p-1 max-w-full min-h-[12rem]">
                <div><strong>Name:</strong> {name}</div>
                <div><strong>Age:</strong> {age}</div>
                <div><strong>Email:</strong> {email}</div>
                <div><strong>Address:</strong> {address}</div>
                <div><strong>Phone:</strong> {phonenumber}</div>
            </div>
        </div>
    </>
  )
}
