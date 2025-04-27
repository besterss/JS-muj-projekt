import './index.css'

export const Plysak = (props) => {

  return (
    <div className="plushy">
    <img className='plushy_image' src={props.plushyImage}/>
    <h2 className='plushy_name'>{props.plysakName}</h2>
    <p className='plushy_text'>{props.plysakDescription}</p>
    </div>
  )
}
