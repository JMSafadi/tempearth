import React from 'react'

type Props = {
  params: {
    city: string,
    latitude: string,
    long: string
  }
}

function weatherPage({params: {city, latitude, long}}: Props) {
  return (
    <div>
      <h1>Welcome to the specifyc weather page, broki!</h1>
      <p>city:{city}</p>
      <p>latitude:{latitude}</p>
      <p>long:{long}</p>
    </div>
  )
}

export default weatherPage