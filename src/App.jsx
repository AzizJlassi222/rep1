import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 const initialStories = [
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
      author: "Dan Ambrov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectId: 1,
    },
 ];

 const [searchTerm, setSearchTerm] = useState("Redux");
 const [stories, setStories] = useState(initialStories);

 const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectId !== story.objectId
    );
    setStories(newStories);
 };

 useEffect(() => {
    const storedSearchTerm = localStorage.getItem("search");
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }
 }, []);

 useEffect(() => {
    localStorage.setItem("search", searchTerm);
 }, [searchTerm]);

 function handleSearch(event) {
    setSearchTerm(event.target.value);
 }

 return (
    <>
      <div>
        <h1>My Hacker Story</h1>
        <InputWithLabel
          id="search"
          value={searchTerm}
          onChange={handleSearch}
        >
          <strong> Search: </strong>
        </InputWithLabel>
        <hr />
        <List list={stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()))} handleRemoveItem={handleRemoveStory} />
      </div>
    </>
 );
}

const InputWithLabel = ({
 id,
 value,
 type = 'text',
 onChange,
 children,
}) => (
 <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
    />
 </>
);

function List({ list, handleRemoveItem }) {
 return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectId} item={item} handleRemoveItem={handleRemoveItem} />
      ))}
    </ul>
 );
}

const Item = ({ item, handleRemoveItem }) => {
 return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button
          type='button'
          onClick={() => handleRemoveItem(item)}
        > Dismiss
        </button>
      </span>
    </li>
 );
};

export default App;
