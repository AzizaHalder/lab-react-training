function IdCard(props) {
  return (
    <div>
      <h1>Id Card</h1>
      <p>{props.lastName}</p>
      <p>{props.firstName}</p>
      <p>{props.gender}</p>
      <p>{props.height}</p>
      <p>{props.birth}</p>
      <img src={props.picture} alt={props.firstName} />
    </div>
  );
}

export default IdCard;
