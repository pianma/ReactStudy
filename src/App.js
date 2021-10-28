import React from "react";


function Food({name, size}) {
  return (
    <div>
    <h1>{name} {size}</h1>
    </div>
  )
}

const foodLike = [
  {
    id : 1,
    name : 'kimchi',
    size : 'small',
  },
  {
    id : 2,
    name : 'sozu',
    size : 'medium',
  },
  {
    id : 3,
    name : 'mackzu',
    size : 'big',
  },
];

function renderFood(dish){
  return <Food name={dish.name} size={dish.size} key={dish.id}/>;
}

function App() {
  return( 
  <div>
    {foodLike.map(renderFood)}
  </div>
  );
}



export default App;
