import { HeroList } from "../components";

export const Marvel = () => {
  const publisher = "Marvel Comics";
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />
      <HeroList publisher={publisher} />
    </>
  );
};
