import { Route } from "react-router";
import ToDoList from "./Components/ToDoList/ToDoList";
import './App.css'
import NavBar from "./Components/NavBar/NavBar";




function App() {
  return (
    <div className="App">
      <Route  path='/' component={NavBar}/>
      <Route  path='/' component={ToDoList}/>
    </div>
  );
}

export default App;
