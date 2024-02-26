import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import * as React from "react";
const list = [
  {
    title:"react",
    url:"https://reactjs.org/",
    author:"Jordan Walke",
    num_comments: 3,
    points:4,
    objectId:0,
  },
  {
    title:"Redux",
    url:"https://redux.js.org/",
    author:"Dan Ambrov,Andrew Clark",
    num_comments: 2,
    points:5,
    objectId:1,
  },

]
function App() {
  

  return (
    <>
      <div>
        <h1> React App </h1>
        <label htmlFor="search">Search</label>
        <input id="search" type="text"/>
        <hr/>
        <ul>
        {list.map(function (item){
          return (
          <li key={item.objectId}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          
          
          </li>
          );
        })}
        </ul>
      </div>

       
    </>
  );
}

export default App
