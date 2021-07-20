import { Route } from "react-router";
import ToDoList from "./Components/ToDoList/ToDoList";
import './App.css'




function App() {
  return (
    <div className="App">
      <Route exact path='/home' component={ToDoList}/>

    </div>
  );
}

export default App;
