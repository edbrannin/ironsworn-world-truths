import TruthCategory from "./TruthCategory";

const Truths = ({ categoryNames=[], categoryTexts={}, selections={} }) => (
  categoryNames.map(catName => (
    <TruthCategory key={catName} categoryName={catName} categroyTexts={categoryTexts[catName]} selection={selections[catName]} />
  ))
)

export default Truths;
