const TruthCategory = ({ categoryName, categoryTexts, selection }) => {
  if (selection) {
    return (
      <div>
        <h2>{categoryName}</h2>
        <p>{categoryTexts[selection]}</p>
      </div>
    )
  }
  return (
    <div>
      <h2>{categoryName}</h2>
      <ol>
        {categoryTexts.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ol>
      <p>{categoryTexts[selection]}</p>
    </div>
  )
}

export default TruthCategory;
