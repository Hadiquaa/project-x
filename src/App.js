import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState([]);
  const [filterData, setFilterData] = useState(userData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://66e6e80b17055714e58ae319.mockapi.io/users');
      const data = await response.json();
      setUserData(data);
    };
    fetchData();
  }, []);

  let handleClick = (event) => {

    let search = event.target.value;
    if (search) {
      let filter = userData.filter(user => user.name.toLowerCase().startsWith(search.toLowerCase()));
      console.log(filter);
      setFilterData(filter)
    }
    else
      setFilterData([]);
    console.log(filterData);

  }

  return (
    <div className="App">
      <h2>Search Users</h2>
      <input type='text' id='myInput' placeholder='Search for names..' onKeyUp={handleClick}></input>
      <ul>
        {filterData.map((user) => {
          return <li key={user.id}><a href='#'>{user.name}</a></li>
        })}
      </ul>
    </div>
  );
}

export default App;
