import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchHero = () => {
  const navigate = useNavigate(); // get navigation
  const location = useLocation(); // information about the location of where we are

  const { q = "" } = queryString.parse(location.search); // get the query parameters ( optional )

  const heroes = getHeroesByName(q);

  const { searchText, onNewValue } = useForm({
    searchText: q,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.trim()}`);
  };
  return (
    <>
      <div className="row">
        <div className="col-5 mt-2">
          <h3>Search</h3>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={searchText}
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
          <div className="alert alert-primary">Hero Found</div>
          <div className="alert alert-danger">
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
