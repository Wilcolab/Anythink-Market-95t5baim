import React from 'react'
import { Link } from "react-router-dom";


const PageNotFound = () => {
  return (
    <><div style={{ backgroundColor: 'red' }}>
      <h1> {' '} Page Not Found ! </h1>
      <p>Oops, Looks like you've stumbled upon an item that currently does not exist. But don't worry, there are plenty of other cool items to choose from in the Anythink marketplace. Take a look around and find something new!</p>
    </div><div >
        <Link to="/"  style={{color: "red"}}>
          Return Home
        </Link></div></>
  )
}

export default PageNotFound;