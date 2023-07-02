import React from 'react'
import App from './App'

const Students = (props) => {
  console.log(props)

  return (<>
      <div>Students</div>

      <h1>Hello! {props.name}</h1>
  
  
  </>
  )
}
Students.defaultProps={
name:"Your Name"
}
export default Students