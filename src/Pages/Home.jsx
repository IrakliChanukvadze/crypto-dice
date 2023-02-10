import React from "react";
import HomeBonuses from "../Components/HomeBonuses";
import HomeBonusesDescriptions from "../Components/HomeBonusesDescriptions";
import CoinSupportList from "../Components/CoinSupportList";
import HomeHero from "../Components/HomeHero";
import HomeSection from "../Components/HomeSection";
import HomeStats from "../Components/HomeStats";
import { sectionData } from "../Data";
import MyInfoModal from "../Components/MyInfoModal";
import SettingsModal from "../Components/SettingsModal";
import WalletModal from "../Components/WalletModal";
import VaultModal from "../Components/VaultModal";

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
      <CoinSupportList />
      <SettingsModal />
      <MyInfoModal />
      <WalletModal />
      <VaultModal />
    </div>
  );
};

export default Home;
