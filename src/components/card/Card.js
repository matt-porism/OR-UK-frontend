import ReactMarkdown from 'react-markdown';
import './card.scss'

export default function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <section className="body-content">
        <ReactMarkdown>{props.body}</ReactMarkdown>
      </section>
      <p className="date">{props.date}</p>
      <img src={props.image} alt="logo" />
    </div>
  )
}


