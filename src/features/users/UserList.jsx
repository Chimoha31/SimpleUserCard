import React from 'react'

const UserList = () => {

  const users = [];

  const renderCard = () => {
    <div>Users Here</div>
  }

  return (
    <div className="grid gap-5 md:grid-cols-2"> 
      {users.length ? renderCard() : <h2 className="text-center col-span-2 text-gray-700 font-semibold">No User</h2>}
    </div>
  )
}

export default UserList
