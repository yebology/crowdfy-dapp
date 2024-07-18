import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Campaign from "./pages/Campaign";
import CampaignDetail from "./pages/CampaignDetail";
import CreateCampaign from "./pages/CreateCampaign";
import { Navbar } from "./components/fixed/Navbar";
import { Footer } from "./components/fixed/Footer";
import { Home } from "./pages/Home";

function App() {
  const [connectedAccount, setConnectedAccount] = useState("");

  useEffect(() => {
    const storedAccount = sessionStorage.getItem("connectedAccount");
    if (storedAccount) {
      setConnectedAccount(storedAccount);
    }
  }, [connectedAccount]);

  async function handleClick() {}

  return (
    <div className="w-screen font-poppins overflow-hidden bg-white sm:px-12 px-6">
      <Navbar account={connectedAccount} action={handleClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/campaign/:id" element={<CampaignDetail />} />
        <Route path="/create_campaign" element={<CreateCampaign />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
