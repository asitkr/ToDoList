import { useState } from 'react';
import './App.css';
import List from './List';

function App() {

  const [inputs, setInputs] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setInputs(e.target.value);
  }

  const handleAdd = () => {
    if(inputs !== ""){
      setList([...list, inputs]);
    }
    setInputs("");
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <div className='Wrapper'>
        <input type="text" value={inputs} onChange={handleInput} />
        <button onClick={handleAdd}>Add</button>
      </div>

      <List list={list} setList={setList} />
    </div>
  );
}

export default App;
