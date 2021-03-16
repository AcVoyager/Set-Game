import React from 'react'

function WelcomePage(props) {
  return (
    <div className="welcome-page">
        
      <div className="mb-5">
        <h1>Welcome to the SET game!</h1>
      </div>

      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-outline-danger btn-lg mx-5">Play!</button>
        <button type="button" className="btn btn-outline-info btn-lg mx-5">Rules</button>
      </div>

    </div>
  )
}

export default WelcomePage;