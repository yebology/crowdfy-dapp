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
  import { changeAccount, connectWallet, disconnectWallet } from "./services/Blockchain";
  import { setGlobalState } from "./services/Helper";
  import { LoadingModal } from "./components/modal/LoadingModal";

  function App() {
    const [connectedAccount, setConnectedAccount] = useState("");

    const handleClick = async () => {
      if (!sessionStorage.getItem("connectedAccount")) {
        await connectWallet();
        setConnectedAccount(sessionStorage.getItem("connectedAccount") || "");
      } else {
        setGlobalState("signOutConfirmationScale", "scale-100");
      }
    };

    const handleDisconnectWallet = () => {
      disconnectWallet();
      handleClose();
      setConnectedAccount("");
    };

    const handleClose = () => {
      setGlobalState("signOutConfirmationScale", "scale-0");
    };

    useEffect(() => {
      const account = sessionStorage.getItem("connectedAccount")
      if (account) {
        setConnectedAccount(account)
      }

      const accountChangedListener = changeAccount(setConnectedAccount);
      if ((window as any).ethereum) {
        (window as any).ethereum.on("accountsChanged", accountChangedListener)
      }

    }, [connectedAccount])

    return (
      <div className="w-screen font-poppins overflow-hidden bg-white sm:px-12 px-6">
        <Navbar account={connectedAccount} actionClick={handleClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/campaign/:id" element={<CampaignDetail />} />
          <Route path="/create_campaign" element={<CreateCampaign />} />
        </Routes>
        <Footer />
        <ErrorCreateCampaignModal />
        <MustConnectWalletModal actionClick={handleClick} />
        <SignOutConfirmationModal
          actionClick={handleDisconnectWallet}
          onClose={handleClose}
        />
        <SuccessfullyCreateCampaignModal />
        <SuccessfullyParticipateModal />
        <LoadingModal />
      </div>
    );
  }

  export default App;
