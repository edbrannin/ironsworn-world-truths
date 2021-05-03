import EditSection from "./EditSection";

const Editor = ({ truths, setTruths }) => {

  const addSection = () => {
    setTruths([
      ...truths,
      {
        name: '',
        options: []
      }
    ])
  };

  const setSection = name => (values) => {
    setTruths(truths.map(truth => {
      if (truth.name === name) {
        return values;
      }
      return truth;
    }))
  }

  return (
    <div>
      {truths.map(({ name, options }) => (
        <EditSection
          key={name}
          name={name}
          options={options}
          setSection={setSection(name)}
        />
      ))}
      <button onClick={() => addSection()}>Add Section</button>
    </div>
  )
}

export default Editor;
