import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["Marvel Comics", "DC Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} no se encuentra en la busqueda`);
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};
