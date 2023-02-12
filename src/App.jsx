import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Bonuses from "./Pages/Bonuses";
import Footer from "./Components/Footer";
import MyInfoModal from "./Components/MyInfoModal";
import SettingsModal from "./Components/Settings/SettingsModal";
import WalletModal from "./Components/Wallet/WalletModal";
import VaultModal from "./Components/Vault/VaultModal";
import TransactionsModal from "./Components/Transactions/TransactionsModal";
import Play from "./Pages/Play";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0, 255, 34)",
    },
    secondary: {
      main: "rgb(255, 0, 0)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="text-black bg-black h-full">
        <Nav />

        <SettingsModal />
        <MyInfoModal />
        <WalletModal />
        <VaultModal />
        <TransactionsModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bonuses" element={<Bonuses />} />
          <Route path="/play" element={<Play />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
