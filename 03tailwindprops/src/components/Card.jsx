import React from 'react'

// eslint-disable-next-line react/prop-types
function Card({channel,btntext="click here"}) {
    console.log("props",channel)
  return (
    <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
            <div className=" bg-black sm:p-10 p-6 rounded-xl">
              <div className="">
                <h5 className="text-xl font-bold text-gray-200">Science of Chemistry</h5>
      
                <p className="mt-2 text-sm text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
                </p>
                <br />
                <button  className="rounded-md bg-gray-800 text-gray-200">{btntext}</button>
              </div>
            </div>
          </div>
  )
}

export default Card