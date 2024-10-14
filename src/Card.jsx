function Card(props) {
  return (
    <>
      <div>
        <img src={props.image}></img>
        <h1>{props.name}</h1>
      </div>
    </>
  );
}

export default Card;
