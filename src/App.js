import React from "react";

function Food(props){
  console.log(props)
  return(
    <div>
      <h1>{props.fav}</h1>
    </div>
  )
}

function App(){
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" 
            something={true}></Food>
    </div>
  )
}

export default App;