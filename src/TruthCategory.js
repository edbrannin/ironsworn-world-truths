import { useState } from 'react';
import styled from 'styled-components';

const Choices = styled.ol`
  flex-direction: row;
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
`;

const Choice = styled.li`
  list-style-type: none;
  margin-left: 0;
  flex: 1;
  padding: 1em;
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 1em;
  border-radius: 1em;
  @media print {
    display: none;
  }
`;

const CategoryName = styled.h2`
  text-align: center;
`;

const Description = styled.p`
  white-space: pre-wrap;
`;

const QuestStarterStyle = styled.p`
  white-space: pre-wrap;
  font-style: italic;
  ::before {
    content: "Quest Starter: ";
  };
`;

const HiddenQuestStarter = styled.p`
  font-style: italic;
  @media print {
    display: none;
  }
`;

const QuestStarter = ({ children }) => {
  const [ show, setShow ] = useState(true);
  if (show) {
    return (
      <QuestStarterStyle onClick={() => setShow(false)}>{children}</QuestStarterStyle>
    )
  }
  return (
    <HiddenQuestStarter onClick={() => setShow(true)}>Show quest starter</HiddenQuestStarter>
  )
}

const Wrapper = styled.div`
  padding: 1em;
  border-top: 1px solid gray;
  @media print {
    page-break-inside: avoid;
  }
`;

const ResetButton = styled.button`
  display: block;
  padding: 0.5em;
  margin-left: auto;
  margin-right: auto;
  @media print {
    display: none;
  }
`;

const SelectedWrapper = styled.div`
  padding: 1em;
  border-top: 1px solid gray;
  max-width: 60em;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 1em grey;
  @media print {
    box-shadow: none;
    max-width: none;
    page-break-inside: avoid;
  }
`;


const TruthCategory = ({ name, options, choice, setChoice }) => {
  if (choice !== undefined && options[choice]) {
    return (
      <SelectedWrapper>
        <CategoryName id={name}>
          {name}
        </CategoryName>
        <Description>{options[choice].description}</Description>
        <QuestStarter>{options[choice].questStarter}</QuestStarter>
        <ResetButton onClick={() => setChoice(undefined)}>Reset</ResetButton>
      </SelectedWrapper>
    )
  }
  if (choice) {
    // Other
    return (
      <SelectedWrapper>
        <CategoryName id={name}>
          {name}
        </CategoryName>
        <ResetButton onClick={() => setChoice(undefined)}>Reset</ResetButton>
        <Description>{choice}</Description>
      </SelectedWrapper>
    )
  }
  return (
    <Wrapper>
      <CategoryName>
        {name}
      </CategoryName>
      <ResetButton onClick={() => setChoice(Math.floor(Math.random() * options.length))}>Random</ResetButton>
      <Choices>
        {options.map(({ description, questStarter }, index) => (
          <Choice key={index}>
            <Description>{description}</Description>
            <QuestStarter>{questStarter}</QuestStarter>
            <SelectButton onClick={() => setChoice(index)}>Select</SelectButton>
          </Choice>
        ))}
      </Choices>
    </Wrapper>
  )
}

export default TruthCategory;
