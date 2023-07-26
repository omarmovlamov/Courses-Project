import "./Loading.css";
function Loading() {
  return (
    <div className="loading">
      <div className="loading-animation">
        <span className="glyphicon glyphicon-cog loading-big"></span>
        <span className="glyphicon glyphicon-cog loading-small"></span>
      </div>
      <p className="loading-text">Loading</p>
    </div>
  );
}

export default Loading;
