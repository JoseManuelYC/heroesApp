import { useLocation, useNavigate } from "react-router-dom";

// Custom Hook
import { useForm } from "../../hooks/useForm";

// Components
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";


export const SearchHero = () => {
  const navigate = useNavigate(); // get navigation
  const location = useLocation(); // information about the location of where we are

const query = new URLSearchParams(location.search) // get the query parameters ( optional )
const q = query.get("q");
  const heroes = getHeroesByName(q);
  const { searchText, onNewValue } = useForm({
    searchText: q,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText.trim()}`);
  };
  const showSearch = q?.length === 0 && searchText.length === 0;
  const showNotFound = q?.length > 0 && heroes.length === 0;

  return (
    <>
      <div className="row">
        <div className="col-5 mt-2">
          <h3>Search</h3>
          <hr />
          <form onSubmit={handleSearch} aria-label="form">
            <input
              type="text"
              className="form-control"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={searchText || ""}
              onChange={onNewValue}
            />
            <button type="submit" className="btn btn-outline-primary mt-3">
              Search
            </button>
          </form>
        </div>
        <div className="col-7 mt-2">
          <h3>Results</h3>
          <hr />
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>
          <div
            aria-label="danger"
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showNotFound ? "" : "none" }}
          >
            The Hero: <b>{q}</b> not found
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
