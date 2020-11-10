import React  from 'react';

function FirstComponent(props){
  console.log("This is firstComp props", props.items)
  return (
    <h1>Hello World!! from First Component</h1>
  )
}

export default FirstComponent;