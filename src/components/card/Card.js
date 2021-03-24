import './card.scss'

export default function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <p className="date">{props.date}</p>
      <img src={props.image} alt="logo" />
    </div>
  )
}


