// CountriesList.js
const CountriesList = props => {
  const {countryDetails, removeCountry} = props
  const {id, name, imageUrl} = countryDetails

  const onDeleteCountry = () => {
    removeCountry(id)
  }

  return (
    <li className="list-container">
      <img src={imageUrl} alt="thumbnail" className="image-url" />
      <div>
        <p className="name">{name}</p>
        <button className="button" type="button" onClick={onDeleteCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountriesList
