import contractAbi from "../abi/DeployedContract.json";
import { ethers, parseEther } from "ethers";

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const contractNetwork = import.meta.env.VITE_NETWORK;
const contractApiKey = import.meta.env.VITE_ALCHEMY_API_KEY;

export async function connectWallet() {
  try {
    if (!(window as any).ethereum) {
      return alert("Please install Metamask!");
    }
    const accounts = await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });
    if (!accounts) {
      return alert("No accounts connected! Please connect a wallet!");
    }
    sessionStorage.setItem("connectedAccount", accounts[0]);
  } catch (error) {
    console.log(error);
  }
}

export function disconnectWallet() {
  sessionStorage.removeItem("connectedAccount");
}

export async function getCampaigns() {
  return await loadCampaigns();
}

export async function getParticipants(campaignId: number) {
  return await loadParticipant(campaignId);
}

export async function participateCampaign(campaignId: number, amount: string) {
  try {
    const contract = await getEthereumContractWithSigner();
    await contract.participateCampaign(campaignId, {
      value: parseEther(amount)
    });
  }
  catch (error) {
    console.log(error);
  }
}

async function getEthereumContractWithSigner() {
  const provider = new ethers.BrowserProvider((window as any).ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  return contract;
}

async function getEthereumContractWithoutSigner() {
  const provider = new ethers.AlchemyProvider(contractNetwork, contractApiKey);
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  return contract;
}

async function loadCampaigns() {
  try {
    const contract = await getEthereumContractWithoutSigner();
    const campaigns = await contract.getCampaigns();
    return structuredCampaigns(campaigns);
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function loadParticipant(campaignId: number) {
  try {
    const contract = await getEthereumContractWithoutSigner();
    const participants = await contract.getParticipant(campaignId);
    return structuredParticipants(participants);
  } catch (error) {
    console.log(error);
    return [];
  }
}

function structuredCampaigns(campaigns: any) {
  const campaignList = campaigns.map((campaign: any) => ({
    id: parseInt(campaign.id),
    campaignTitle: campaign.campaignTitle,
    campaignDescription: campaign.campaignDescription,
    campaignPicture: campaign.campaignPicture,
    campaignStart: parseInt(campaign.campaignStart),
    campaignEnd: parseInt(campaign.campaignEnd),
    campaignCreator: campaign.campaignCreator.toString(),
    fundsRequired: parseFloat(campaign.fundsRequired),
    currentRaised: parseFloat(campaign.currentRaised),
    status: parseInt(campaign.status),
  }));
  return campaignList;
}

function structuredParticipants(participants: any) {
  const participantList = participants.map((participant: any) => ({
    id: parseInt(participant.id),
    user: (participant.user).toString(),
    donationAmount: parseFloat(participant.donationAmount),
    timestamp: parseInt(participant.timestamp),
  }));
  return participantList;
}
