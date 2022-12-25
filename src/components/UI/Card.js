import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card}>
      <h2>{props.title}</h2>
      <div className={classes.details}>
        <img src={props.image} alt={props.title} />
        <p>{props.rating}</p>
        <h3>{props.category}</h3>
        <p>{props.description.slice(0, 70)}..</p>
        <h5>$ {props.price}</h5>
      </div>
      <button className={classes.button}>Add to Cart</button>
    </div>
  );
}

export default Card;
