import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../UI";
import { Dc, Marvel, SearchHero, HeroPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<Marvel />} />
          <Route path="dc" element={<Dc />} />
          <Route path="search" element={<SearchHero />} />
          <Route path="hero" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
    </>
  );
};
