import React from 'react'

  const Counter = props => {
    return(
      <h1  className="mb-2 mt-0 mx-auto h-2/6">Question {props.current+1} out of 3</h1>
    )
  }

export default Counter
