function Course({ id, content, title, price, deleteCard }) {
  return (
    <div className="Card">
      <div className="card-title">
        <h2>{title}</h2>
        <p>{price} $</p>
      </div>
      <p>{content}</p>
      <button onClick={() => deleteCard(id)}>Delete</button>
    </div>
  );
}

export default Course;
