import './App.css';
import { useState } from 'react';

function App() {

  // useState is a hook
  // its is used for storing and updating variable value without re-rendering the DOM
  // it doesnt update the scope value.... e.g., statedata = ‘bilal’ & setStatedata = ‘sami’… then onclick changes the state but on console.log the value remains ‘bilal’ and this can’t be solved

  let [state , setState] = useState('sami')
// the state value is 'sami' and setState updates it to bilal
// basically old value is sami and it updates to bilal
  const changeName = ()=>{
    setState('bilal')
  }
  const oldName = ()=>{
    setState('sami')
  }

  return (
    <div className="App">
      <header className="App-header">
       {state}
       <button onClick={changeName}> 
       {/* no '()' with function name as we dont want it to execute as soon as the deployment happens */}
        change name
       </button>
       <br></br>
       <button onClick={oldName}>
        return name
       </button>

      </header>
    </div>
  );
}

export default App;
