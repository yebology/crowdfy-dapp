import React from "react";
import contractAbi from "../abi/DeployedContract.json";
import { ethers, formatEther, parseEther } from "ethers";

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
    console.error(error);
  }
}

export function changeAccount(
  setConnectedAccount: React.Dispatch<React.SetStateAction<string>>
): (accounts: string[]) => void {
  return (accounts: string[]) => {
    if (accounts.length > 0) {
      sessionStorage.setItem("connectedAccount", accounts[0]);
      setConnectedAccount(accounts[0]);
    }
  };
}

export async function fetchUserBalance(
  account: string,
) {
  if ((window as any).ethereum) {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const userBalanceInWei = await provider.getBalance(account);
    const userBalanceInEther = formatEther(userBalanceInWei);
    sessionStorage.setItem("userBalance", userBalanceInEther);
    console.log(sessionStorage.getItem("userBalance"));
  }
}

export function disconnectWallet() {
  sessionStorage.removeItem("connectedAccount");
}

export async function getUserBalance() {
  try {
  } catch (error) {
    console.error(error);
  }
}

export async function getCampaigns() {
  return await loadCampaigns();
}

export async function getParticipants(campaignId: number) {
  return await loadParticipant(campaignId);
}

export async function createCampaign(
  campaignTitle: string,
  campaignDescription: string,
  campaignPicture: string,
  campaignStart: number,
  campaignEnd: number,
  fundsRequired: bigint
) {
  try {
    const contract = await getEthereumContractWithSigner();
    const transaction = await contract.createCampaign(
      campaignTitle,
      campaignDescription,
      campaignPicture,
      campaignStart,
      campaignEnd,
      fundsRequired,
      {
        gasLimit: 3000000,
      }
    );
    return transaction;
  } catch (error) {
    console.error(error);
    return "";
  }
}

export async function participateCampaign(campaignId: number, amount: string) {
  try {
    const contract = await getEthereumContractWithSigner();
    const transaction = await contract.participateCampaign(campaignId, {
      value: parseEther(amount),
      gasLimit: 3000000,
    });
    return transaction;
  } catch (error) {
    console.error(error);
    return "";
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
    console.error(error);
    return [];
  }
}

async function loadParticipant(campaignId: number) {
  try {
    const contract = await getEthereumContractWithoutSigner();
    const participants = await contract.getParticipant(campaignId);
    return structuredParticipants(participants);
  } catch (error) {
    console.error(error);
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
    user: participant.user.toString(),
    donationAmount: parseFloat(participant.donationAmount),
    timestamp: parseInt(participant.timestamp),
  }));
  return participantList;
}
