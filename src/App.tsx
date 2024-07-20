import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Campaign from "./pages/Campaign";
import { CreateCampaign } from "./pages/CreateCampaign";
import { Navbar } from "./components/fixed/Navbar";
import { Footer } from "./components/fixed/Footer";
import { Home } from "./pages/Home";
import { CampaignDetail } from "./pages/CampaignDetail";
import { MustConnectWalletModal } from "./components/modal/MustConnectWalletModal";
import { ErrorCreateCampaignModal } from "./components/modal/ErrorCreateCampaignModal";
import { SignOutConfirmationModal } from "./components/modal/SignOutConfirmationModal";
import { SuccessfullyCreateCampaignModal } from "./components/modal/SuccessfullyCreateCampaignModal";
import { SuccessfullyParticipateModal } from "./components/modal/SuccessfullyParticipateModal";

function App() {
  const [connectedAccount, setConnectedAccount] = useState("");

  const handleClick = async () => {};

  useEffect(() => {
    const storedAccount = sessionStorage.getItem("connectedAccount");
    if (storedAccount) {
      setConnectedAccount(storedAccount);
    }
  }, [connectedAccount]);

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
      <ErrorCreateCampaignModal />
      <MustConnectWalletModal actionClick={handleClick} />
      <SignOutConfirmationModal />
      <SuccessfullyCreateCampaignModal />
      <SuccessfullyParticipateModal />
    </div>
  );
}

export default App;
