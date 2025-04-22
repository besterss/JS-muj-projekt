import './index.css'

export const Plysak = (props) => {
  
    return (
      <div className="plushy">
        <img src={props.imgLocation} />
        <strong>{props.plysakName}</strong>
        <p>{props.plysakDescription}</p>
      </div>
    )
}