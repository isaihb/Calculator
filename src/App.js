
import './App.css';
import { useState } from 'react';

const [index, setIndex] = useState(0);

function App() {





  return (
    <div className="App">
      <header className="App-header">
       
        
        
      </header>
      <button className = "add" id = "operation">+</button>
      <button className = "subtract" id = "operation">-</button>
      <button className = "multiply" id = "operation">*</button>
      <button className = "divide" id = "operation">/</button>
      <button className = "enter">=</button>
      <button className = "zero" id = "num">0</button>
      <button className = "one"  id = "num">1</button>
      <button className = "two"  id = "num">2</button>
      <button className = "three"  id = "num">3</button>
      <button className = "four"  id = "num">4</button>
      <button className = "five"  id = "num">5</button>
      <button className = "six"  id = "num">6</button>
      <button className = "seven"  id = "num">7</button>
      <button className = "eight"  id = "num">8</button>
      <button className = "nine"  id = "num">9</button>
      <button className = "decimal" id = "num">.</button>
      <button className = "AC">Clear</button>
      <div className = "output">hi</div>
    </div>
  
    
  );
}

export default App;
