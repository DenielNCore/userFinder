import React from 'react';
import './App.css';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';


function App() {
    return (
        <div className="App">

            <SearchBar/>

            <UserList/>

        </div>
    );
}

export default App;
