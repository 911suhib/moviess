 import image from './suhib.jpg'
function Card(props) {
  return (
    <div className='card'>
        <img src={image} alt="my image" />
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Enrolled: {props.isEnrolled ? 'yes':'no'}</p>

         </div>
  )
}
Card.defaultProps={
    name:'Guest',
age:0,
isEnrolled:false
}

export default Card