import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ToDoListDashboard from './components/ToDoListDashboard';
import ToDoListForm from './components/ToDoListForm';

const App = () => {
    const [toDoList, setToDoList] = useState([])

    const addToDo = (newToDo) => {
      setToDoList([...toDoList, newToDo])
    }

    const removeFromList = (deleteIdx) => {
      const filteredList = toDoList.filter((eachToDo, idx) => idx !== deleteIdx)
      setToDoList(filteredList)
    }
  
  const updateToDoFromList = (idx, updatedToDo) => {
      
    const tempList = [...toDoList]
    tempList[idx].completed = updatedToDo
    setToDoList(tempList)

      }

      return (
        <fieldset>
            <legend>App.jsx</legend>
          <ToDoListForm addToDo={addToDo} />
          <ToDoListDashboard
            toDoList={toDoList}
            onDelete={removeFromList}
            onUpdateToDo={ updateToDoFromList} />
        </fieldset>
      
      );
    }

export default App;
