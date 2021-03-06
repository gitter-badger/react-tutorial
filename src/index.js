import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';

const App = () => {
    const todoData = [
        {label: "Learn React", important: true},
        {label: "Drink Coffee", important: false},
        {label: "Have a launch", important: false}
    ];

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ToDoList todos={todoData}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));