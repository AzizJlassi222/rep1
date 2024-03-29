import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import * as React from "react";
const list = [
  {
    title: "react",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Ambrov,Andrew Clark",
    num_comments: 2,
    points: 5,
    objectId: 1,
  },

]
function App() {


  return (
    <>
      <div>
        <h1> React App </h1>
        <Search />
        <hr />
        <List />
      </div>

    </>
  );
}
function Search() {
  const handleChange = (event) => {
    console.log(event)
  }
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" onChange={handleChange} />

    </div>



  );

}


function List() {
  return (
    <div>
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectId}>
              <span>
                <a gref={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>

    </div>



  );

}



export default App
