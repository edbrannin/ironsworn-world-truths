import { useState } from 'react';
import Editor from './Editor';
import Truths from './Truths';

function App() {
  const [truths, setTruths] = useState([]);
  return (
    <div>
      <h1>Ironsworn World Truths</h1>
      <Editor truths={truths} setTruths={setTruths} />
      <Truths></Truths>
    </div>
  );
}

export default App;
