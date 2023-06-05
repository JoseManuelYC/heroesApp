import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const [img, setImg] = useState()

  useEffect(() => {
    (async () => {
      const img = await import(`../../../public/heroes/${id}.jpg`).then((asset) => asset.default)

      setImg(img)
    })()
  }, [id])

  return (
    <div className="col">
      <div className="card animate__animated animate__fadeIn">
        <div className="row no-gutters">
          <div className="col-4">
            {img && <img src={img} className="card-img h-100" alt={superhero} />}
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
            <Link to={`/hero/${id}`}>More...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
