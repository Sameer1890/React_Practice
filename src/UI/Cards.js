import './Cards.css';

function Card(props) {
    const cards = ['card', props.className].filter(Boolean).join(' ');
    return (
    <div className={cards}>{props.children}</div>
);
}   

export default Card;