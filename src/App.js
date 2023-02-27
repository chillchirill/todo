import './App.css';
import React, { useState } from 'react';
import book from './images/book-svgrepo-com.svg';
import Element from './element';


function App() {
let [items, setItems] = useState([]);
function adding() {
  let input = document.querySelector("#in");
  setItems([...items, {info: input.value, cb: 0, id: items.length}]);
  console.log(items);
}
  return (
    <div className="App">
      <h2 class="head">TodoInput</h2>
    <div class="hinp">
      <div class="nella">
        <img src={book} alt="" id="im"/>
        <input type="text" placeholder="New Todo" id="in"/>
      </div>
       <button id="add" class="but" onClick={adding}>Add new task</button> 
    </div>
    <h2 class="head">TodoList</h2>
    <div class="func">
      <button class="but adt" id="all">All</button>
      <button class="but adt" id="done">Done</button>
      <button class="but adt" id="todo">Todo</button>
      
    </div>
      
    <div class="hh">
      {items.map((p, index) => <Element key={index} info={p.info} id={index}/>)}
    </div>
      <div class="func2">
        <button class="but" id="ddt">Delete done tasks</button>
        <button class="but" id="dat">Delete all tasks</button>
      </div>  
    </div>
  );
}
export default App;
