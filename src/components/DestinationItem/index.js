// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  const {name, imgUrl} = placeDetails

  return (
    <li className="places-card">
      <img src={imgUrl} className="place-image" alt={name} />
      <p className="palce">{name}</p>
    </li>
  )
}

export default DestinationItem
