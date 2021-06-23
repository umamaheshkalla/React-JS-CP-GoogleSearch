import './index.css'

const SuggestionItem = props => {
  const {suggestions, arrowSuggestedInput} = props
  const {suggestion} = suggestions
  const onClickArrow = () => {
    arrowSuggestedInput(suggestion)
  }
  return (
    <li className="list-items">
      <p className="suggestion-item">{suggestion}</p>
      <button className="button" type="button">
        <img
          onClick={onClickArrow}
          className="arrow-img"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        />
      </button>
    </li>
  )
}
export default SuggestionItem
