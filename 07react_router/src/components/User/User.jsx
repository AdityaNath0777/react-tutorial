// import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId} = useParams()
  return (
    <div className="bg-orange-500 text-center text-white p-4 text-3xl font-bold" >
      User : {userId}
    </div>
  )
}

export default User
