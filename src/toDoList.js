
import React from 'react';

function Todo (props) {
return (
    <div>
    <ul className="listOfItems">
                {props.items.map((item, index) => {
                return <li key={index}>{props.items[index]}</li>
                })}
    </ul>
    </div>
)}

export default Todo;