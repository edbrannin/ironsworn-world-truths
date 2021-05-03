import Truths from './Truths';
import truths from './ironsworn-truths';
import { useState } from 'react';

function App() {
  const [ choices, setChoices ] = useState({});
  const setChoice = (name, value) => setChoices({
    ...choices,
    [name]: value,
  });

  return (
    <div>
      <Truths truths={truths} choices={choices} setChoice={setChoice}></Truths>
    </div>
  );
}

export default App;
