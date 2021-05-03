import EditOption from "./EditOption";

const EditSection = ({ name, setSection, options }) => {
  const addOption = () => {
    setSection({
      name,
      options: [
        ...options,
        {},
      ],
    })
  };

  const setOption = index => newValues => setSection({
    name,
    options: options.map((opt, idx) => {
      if (index === idx) {
        return newValues;
      }
      return opt;
    }),
  });

  return (
    <div>
      <h2>{name}</h2>
      {options.map((values, index) => (
        <EditOption key={index} values={values} setOption={setOption(index)} />
      ))}
      <button onClick={() => addOption()}>Add Option</button>
    </div>
  )
}

export default EditSection;
