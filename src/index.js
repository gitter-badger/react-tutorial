import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome app</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My to-do list</h1>;
};

const SearchPanel = () => {
    return <input type="text" placeholder="search"/>;
};

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ToDoList/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));