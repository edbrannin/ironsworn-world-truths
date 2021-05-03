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
`;

const Description = styled.p`
  white-space: pre-wrap;
`;

const QuestStarter = styled.p`
  white-space: pre-wrap;
  font-style: italic;
  ::before {
    content: "Quest Starter:";
  };
`;

const Wrapper = styled.div`
  padding: 1em;
  border-top: 1px solid gray;
`;


const TruthCategory = ({ name, options, choice, setChoice }) => {
  if (choice !== undefined && options[choice]) {
    return (
      <Wrapper>
        <h2 id={name}>
          {name}
          <button onClick={() => setChoice(undefined)}>Reset</button>
        </h2>
        <Description>{options[choice].description}</Description>
        <QuestStarter>{options[choice].questStarter}</QuestStarter>
      </Wrapper>
    )
  }
  if (choice) {
    // Other
    return (
      <Wrapper>
        <h2 id={name}>
          {name}
          <button onClick={() => setChoice(undefined)}>Reset</button>
        </h2>
        <Description>{choice}</Description>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h2>
        {name}
        <button onClick={() => setChoice(Math.floor(Math.random() * options.length))}>Random</button>
      </h2>
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
