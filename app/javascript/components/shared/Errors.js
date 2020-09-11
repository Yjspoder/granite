import React from 'react'

function Errors({ errors, message }) {
  return (
    <>
      <div className={`alert alert-${message}`} >
        {errors.map(error => {
          return <li key={error} >{error}</li>
        })}
      </div>
    </>
  )
}

export default Errors;
