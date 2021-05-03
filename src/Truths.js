import TruthCategory from "./TruthCategory";

const Truths = ({ truths, choices = {}, setChoice }) => (
  truths.map(({ name, options }) => (
    <TruthCategory key={name} name={name} options={options} choice={choices[name]} setChoice={(val) => setChoice(name, val)} />
  ))
)

export default Truths;
