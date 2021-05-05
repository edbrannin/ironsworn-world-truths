import styled from 'styled-components';
import { useState } from 'react';
import Truths from './Truths';
import truths from './ironsworn-truths';
import PrintButton from './PrintButton';

const SiteHeader = styled.h1`
  text-align: center;
`;

const Usage = styled.div`
  @media print {
    display: none;
  }
  text-align: center;
`;

function App() {
  const [ choices, setChoices ] = useState({});
  const setChoice = (name, value) => setChoices({
    ...choices,
    [name]: value,
  });

  return (
    <div>
      <SiteHeader>Ironsworn World Truths</SiteHeader>
      <PrintButton />
      <Usage>
        <p>Choose your world's truths.</p>
        <p>After you select a Truth, you can click on its Quest Starter to hide it.</p>
      </Usage>
      <Truths truths={truths} choices={choices} setChoice={setChoice}></Truths>
    </div>
  );
}

export default App;
