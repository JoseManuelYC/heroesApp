import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const imgUrl = `/assets/heroes/${id}.jpg`;
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);
  const onBackNavigate = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__bounceIn">
        <img src={imgUrl} alt={hero.superhero} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter-Ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b>
            {hero.first_appearance}
          </li>
          <li className="list-group-item">
            <b>Characthers: </b>
            {hero.characters}
          </li>
        </ul>
        <button
          className="btn btn-outline-primary mt-4"
          onClick={onBackNavigate}
        >
          Back
        </button>
      </div>
    </div>
  );
};
