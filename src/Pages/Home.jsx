import React from "react";
import HomeBonuses from "../Components/HomeComponents/HomeBonuses";
import HomeBonusesDescriptions from "../Components/HomeComponents/HomeBonusesDescriptions";
import CoinSupportList from "../Components/CoinSupportList";
import HomeHero from "../Components/HomeComponents/HomeHero";
import HomeSection from "../Components/HomeComponents/HomeSection";
import HomeStats from "../Components/HomeComponents/HomeStats";
import { sectionData } from "../Data";
import MyInfoModal from "../Components/MyInfoModal";
import SettingsModal from "../Components/Settings/SettingsModal";
import WalletModal from "../Components/Wallet/WalletModal";
import VaultModal from "../Components/Vault/VaultModal";

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
