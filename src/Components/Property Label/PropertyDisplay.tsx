import './PropertyDisplay.css'

function PropertyLabel(props: any) {
  return (
    <div className="property-label">
      <div className="property"> {props.property} </div>
      <div className="value"> {props.value} </div>
    </div>
  )
}

export default PropertyLabel;