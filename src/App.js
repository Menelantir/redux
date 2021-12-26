import './App.css';
import React from "react";
import ListTask from './components/ListTask';
import Addtask from './components/Addtask'


function App() {
  
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <Addtask/>
      <ListTask></ListTask>      
    </div>
  );
}

export default App;
