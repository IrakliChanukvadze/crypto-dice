import React from "react";
import HomeBonuses from "../Components/HomeBonuses";
import HomeBonusesDescriptions from "../Components/HomeBonusesDescriptions";

import HomeHero from "../Components/HomeHero";
import HomeSection from "../Components/HomeSection";
import HomeStats from "../Components/HomeStats";
import { sectionData } from "../Data";

const Home = () => {
  return (
    <div className={``}>
      <HomeHero />
      <HomeStats />
      {sectionData.map((item) => (
        <HomeSection
          key={item.title}
          title={item.title}
          img={item.img}
          description={item.description}
          color={item.color}
        />
      ))}
      <HomeBonuses />
      <HomeBonusesDescriptions />
    </div>
  );
};

export default Home;
