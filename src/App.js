import styled from 'styled-components';
import { useState } from 'react';
import Truths from './Truths';
import truths from './ironsworn-truths';
import PrintButton from './PrintButton';

const SiteHeader = styled.h1`
  text-align: center;
`;

const Footer = styled.div`
  text-align: center;
  padding: 1em;
`;

const OnlyScreen = styled.div`
  @media print {
    display: none;
  }
`;

const OnlyPrint = styled.div`
  @media screen {
    display: none;
  }
`;

const Usage = styled(OnlyScreen)`
  text-align: center;
`;


const GITHUB_PATH = 'https://github.com/edbrannin/ironsworn-world-truths';

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
      <Footer>
        <p>
          <a href="https://www.ironswornrpg.com/">Ironsworn World Workbook</a>
          {' '}
          by Shawn Tomkin is licensed under
          {' '}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
        </p>
        <OnlyScreen>
          <p>
            <a href={GITHUB_PATH}>
              <img
                alt="GitHub Project"
                src={process.env.PUBLIC_URL + '/GitHub-Mark-64px.png'}
              />
            </a>
          </p>
        </OnlyScreen>
        <OnlyPrint>
          Produced at <tt>{window.location.href}</tt>
        </OnlyPrint>
      </Footer>
    </div>
  );
}

export default App;
