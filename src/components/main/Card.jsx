import "./Main.scss";

const Card = ({title,desc,image}) => {
  return (
    <div className="card">
      <div className="card-title">
        <h1>{title}</h1>
      </div>
    
      <img src={image} alt={title} />
    
      <div className="desc">
       <p>{desc}</p>
      </div>
  </div>
);
};

export default Card;