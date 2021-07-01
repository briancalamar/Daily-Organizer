import { Route } from "react-router";
import Form from "./Components/Form";
import Todos from "./Components/Todos";


function App() {
  return (
    <div className="App">
      <Route exact path='/home' component={Form}/>
      <Route exact path='/home' component={Todos}/>
    </div>
  );
}

export default App;
