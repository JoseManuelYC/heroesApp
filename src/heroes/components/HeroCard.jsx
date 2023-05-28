import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imgUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={imgUrl} className="card-img h-100" alt={superhero} />
          </div>
          <div className="col-8">
            <h3>{superhero}</h3>
            <p>{alter_ego}</p>
            {characters !== alter_ego && (
              <p>
                Characters: <small className="text-muted">{characters}</small>
              </p>
            )}
            <p className="card-text">
              <span>First Appearance: </span>
              <small className="text-muted">
                <strong>{first_appearance}</strong>
              </small>
            </p>
            <Link to={`/hero/${id}`}>Mas...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
